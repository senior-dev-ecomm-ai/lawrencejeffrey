(function() {
  var root = document.getElementById('CollectionProductGrid');
  if (!root || root.dataset.infiniteWatch === 'true') return;
  root.dataset.infiniteWatch = 'true';

  var gridObserver = new MutationObserver(function() {
    bindSentinel(root);
  });
  gridObserver.observe(root, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      bindSentinel(root);
    });
  } else {
    bindSentinel(root);
  }

  function bindSentinel(container) {
    var sentinel = container.querySelector('[data-infinite-sentinel]');
    if (!sentinel || sentinel.dataset.bound === 'true') return;
    sentinel.dataset.bound = 'true';

    var next = sentinel.querySelector('[data-infinite-next]');
    var status = sentinel.querySelector('[data-infinite-status]');
    if (!next) return;

    var loading = false;
    var done = false;
    var seen = new Set();
    seen.add(next.getAttribute('href'));

    var observer = new IntersectionObserver(function(entries) {
      if (entries.some(function(entry) { return entry.isIntersecting; })) {
        loadMore();
      }
    }, { rootMargin: '0px 0px 2500px 0px' });
    observer.observe(sentinel);

    next.addEventListener('click', function(event) {
      event.preventDefault();
      loadMore();
    });

    function loadMore() {
      if (loading || done) return;
      var href = next.getAttribute('href');
      if (!href) {
        finish();
        return;
      }

      loading = true;
      sentinel.classList.add('is-loading');
      sentinel.classList.remove('is-error');
      if (status) status.textContent = 'Loading more';

      var url = new URL(href, window.location.origin);
      if (sentinel.dataset.sectionId) {
        url.searchParams.set('section_id', sentinel.dataset.sectionId);
      }
      var preview = new URL(window.location.href).searchParams.get('preview_theme_id');
      if (preview) url.searchParams.set('preview_theme_id', preview);

      fetch(url.toString(), { credentials: 'same-origin' })
        .then(function(response) {
          if (!response.ok) throw new Error('Could not load the next products');
          return response.text();
        })
        .then(function(html) {
          var doc = new DOMParser().parseFromString(html, 'text/html');
          var incoming = doc.querySelector('.collection-product-grid');
          var host = document.getElementById('main-collection-product-grid');
          if (!incoming || !host) throw new Error('Missing product grid');

          var fragment = document.createDocumentFragment();
          incoming.querySelectorAll(':scope > style, :scope > .grid-item').forEach(function(node) {
            if (node.classList.contains('grid-header') || node.classList.contains('main_featured_col')) return;
            fragment.appendChild(node);
          });
          if (!fragment.childNodes.length) throw new Error('Missing product grid');
          host.appendChild(fragment);

          var upcoming = doc.querySelector('[data-infinite-next]');
          var upcomingHref = upcoming && upcoming.getAttribute('href');
          if (!upcomingHref || seen.has(upcomingHref)) {
            finish();
            return;
          }
          seen.add(upcomingHref);
          next.setAttribute('href', upcomingHref);
        })
        .catch(function() {
          sentinel.classList.add('is-error');
          if (status) status.textContent = 'Couldn’t load more products.';
        })
        .then(function() {
          loading = false;
          sentinel.classList.remove('is-loading');
          if (!done && !sentinel.classList.contains('is-error') && status) {
            status.textContent = '';
          }
          if (!done && !sentinel.classList.contains('is-error') && isNear(sentinel)) {
            loadMore();
          }
        });
    }

    function finish() {
      done = true;
      observer.disconnect();
      if (status) status.textContent = '';
      sentinel.remove();
    }
  }

  function isNear(element) {
    return element.getBoundingClientRect().top < window.innerHeight + 2500;
  }
})();
