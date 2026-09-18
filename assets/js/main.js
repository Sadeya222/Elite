/* ==========================================================================
   EliteSportCarsClub – Landingpage Interactions
   Vanilla JS, no dependencies.
   ========================================================================== */
(function () {
  'use strict';

  var YOUTUBE_ID = 'ry9gG6nqdAw'; // https://youtube.com/shorts/ry9gG6nqdAw
  var STORE_KEY = 'elite.wishlist';

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ------------------------------------------------------------------ *
   * Toasts
   * ------------------------------------------------------------------ */
  var toastWrap = $('#toastWrap');
  function toast(message, icon) {
    if (!toastWrap) return;
    var el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = (icon ? '<img src="' + icon + '" alt="">' : '') + '<span></span>';
    el.lastChild.textContent = message;
    toastWrap.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('is-visible'); });
    setTimeout(function () {
      el.classList.remove('is-visible');
      setTimeout(function () { el.remove(); }, 300);
    }, 2600);
  }

  /* ------------------------------------------------------------------ *
   * Header: shadow on scroll + mobile navigation
   * ------------------------------------------------------------------ */
  var header = $('#siteHeader');

  /* keep the sticky-header height in sync with the real rendered height */
  function syncHeaderHeight() {
    if (!header) return;
    document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
  }
  var nav = $('#primaryNav');
  var navToggle = $('#navToggle');
  var lastY = 0;

  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (stickyCta) {
      var show = y > 520 && y < (document.body.scrollHeight - window.innerHeight - 420);
      stickyCta.hidden = false;
      stickyCta.classList.toggle('is-visible', show);
    }
    lastY = y;
  }

  function toggleNav(force) {
    if (!nav || !navToggle) return;
    var open = typeof force === 'boolean' ? force : !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () { toggleNav(); });
  }
  $$('.nav__link, .nav__mobile-actions .btn').forEach(function (link) {
    link.addEventListener('click', function () { toggleNav(false); });
  });

  document.addEventListener('click', function (e) {
    if (!nav || !nav.classList.contains('is-open')) return;
    if (nav.contains(e.target) || (navToggle && navToggle.contains(e.target))) return;
    toggleNav(false);
  });

  /* ------------------------------------------------------------------ *
   * Smooth scroll for buttons that are not plain anchors
   * ------------------------------------------------------------------ */
  $$('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = $(btn.getAttribute('data-scroll'));
      if (!target) return;
      toggleNav(false);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ------------------------------------------------------------------ *
   * Sticky mobile CTA
   * ------------------------------------------------------------------ */
  var stickyCta = $('#stickyCta');

  /* ------------------------------------------------------------------ *
   * Video facade (YouTube Shorts)
   * ------------------------------------------------------------------ */
  var videoFrame = $('#videoFrame');
  var videoPlay = $('#videoPlay');
  var videoMute = $('#videoMute');
  var videoFull = $('#videoFull');
  var videoPlayer = null;

  function startVideo() {
    if (!videoFrame || videoPlayer) return;
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + YOUTUBE_ID +
      '?autoplay=1&playsinline=1&rel=0&modestbranding=1&enablejsapi=1';
    iframe.title = 'Lamborghini Huracán EVO selber fahren – Video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    videoFrame.appendChild(iframe);
    videoFrame.classList.add('is-playing');
    videoPlayer = iframe;

    $$('.video-card__poster, .video-card__script, .video-card__play, .video-card__progress').forEach(function (el) {
      el.style.display = 'none';
    });
    if (videoMute) videoMute.disabled = false;
    var time = $('#videoTime');
    if (time) time.textContent = 'Wird geladen …';
  }

  if (videoPlay) videoPlay.addEventListener('click', startVideo);

  if (videoMute) {
    var muted = false;
    videoMute.addEventListener('click', function () {
      if (!videoPlayer) return;
      muted = !muted;
      videoPlayer.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: muted ? 'mute' : 'unMute', args: [] }), '*'
      );
      videoMute.setAttribute('aria-label', muted ? 'Ton einschalten' : 'Ton ausschalten');
    });
  }

  if (videoFull) {
    videoFull.addEventListener('click', function () {
      var el = videoFrame;
      if (!el) return;
      if (document.fullscreenElement) { document.exitFullscreen(); return; }
      if (el.requestFullscreen) el.requestFullscreen();
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    });
  }

  /* ------------------------------------------------------------------ *
   * FAQ accordion
   * ------------------------------------------------------------------ */
  $$('.faq__q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq__item');
      var panel = $('.faq__a', item);
      var open = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', String(!open));
      item.classList.toggle('is-open', !open);
      if (panel) panel.hidden = open;
    });
  });

  var faqExpandAll = $('#faqExpandAll');
  if (faqExpandAll) {
    faqExpandAll.addEventListener('click', function () {
      var expand = faqExpandAll.getAttribute('aria-expanded') !== 'true';
      $$('.faq__q').forEach(function (btn) {
        var item = btn.closest('.faq__item');
        btn.setAttribute('aria-expanded', String(expand));
        item.classList.toggle('is-open', expand);
        var panel = $('.faq__a', item);
        if (panel) panel.hidden = !expand;
      });
      faqExpandAll.setAttribute('aria-expanded', String(expand));
      faqExpandAll.innerHTML = (expand ? 'Alle Fragen schließen' : 'Alle Fragen anzeigen') + ' <span aria-hidden="true">→</span>';
    });
  }

  var allReviews = $('#allReviews');
  if (allReviews) {
    allReviews.addEventListener('click', function () {
      toast('Demo: In der Live-Version öffnet sich hier das Bewertungsportal.', 'assets/icons/stars.png');
    });
  }

  /* ------------------------------------------------------------------ *
   * Wishlist (localStorage)
   * ------------------------------------------------------------------ */
  var wishlistToggle = $('#wishlistToggle');
  var wishlistDrawer = $('#wishlistDrawer');
  var wishlistList = $('#wishlistList');
  var wishlistEmpty = $('#wishlistEmpty');
  var wishlistCount = $('#wishlistCount');
  var overlay = $('#overlay');

  var wishlist = [];
  try {
    wishlist = JSON.parse(localStorage.getItem(STORE_KEY) || '[]') || [];
  } catch (err) { wishlist = []; }

  function saveWishlist() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(wishlist)); } catch (err) {}
  }

  function renderWishlist() {
    if (!wishlistList) return;
    wishlistList.innerHTML = '';
    wishlist.forEach(function (entry) {
      var li = document.createElement('li');
      li.className = 'wishlist__item';
      li.innerHTML =
        '<span><span class="wishlist__city"></span><span class="wishlist__date"></span></span>' +
        '<button class="wishlist__remove" type="button" aria-label="Aus der Wunschliste entfernen">×</button>';
      $('.wishlist__city', li).textContent = entry.city;
      $('.wishlist__date', li).textContent = entry.date || '';
      $('.wishlist__remove', li).addEventListener('click', function () {
        wishlist = wishlist.filter(function (item) { return item.city !== entry.city; });
        saveWishlist();
        syncCityHearts();
        renderWishlist();
        toast(entry.city + ' wurde aus der Wunschliste entfernt');
      });
      wishlistList.appendChild(li);
    });

    if (wishlistEmpty) wishlistEmpty.hidden = wishlist.length > 0;
    if (wishlistCount) {
      wishlistCount.textContent = String(wishlist.length);
      wishlistCount.hidden = wishlist.length === 0;
    }
  }

  function syncCityHearts() {
    $$('.city').forEach(function (card) {
      var city = card.getAttribute('data-city');
      var btn = $('.city__heart', card);
      if (!btn) return;
      var stored = wishlist.some(function (item) { return item.city === city; });
      btn.setAttribute('aria-pressed', String(stored));
      btn.setAttribute('aria-label', stored
        ? city + ' aus der Wunschliste entfernen'
        : city + ' zur Wunschliste hinzufügen');
    });
  }

  $$('.city').forEach(function (card) {
    var city = card.getAttribute('data-city');
    var date = card.getAttribute('data-date');

    $('.city__btn', card).addEventListener('click', function () {
      selectCity(city);
    });

    $('.city__heart', card).addEventListener('click', function () {
      var stored = wishlist.some(function (item) { return item.city === city; });
      if (stored) {
        wishlist = wishlist.filter(function (item) { return item.city !== city; });
        toast(city + ' wurde aus der Wunschliste entfernt');
      } else {
        wishlist.push({ city: city, date: date });
        toast(city + ' ist auf deiner Wunschliste', 'assets/icons/heart-filled.png');
      }
      saveWishlist();
      syncCityHearts();
      renderWishlist();
    });
  });

  function selectCity(city) {
    var select = $('#citySelect');
    if (select) {
      var option = $$('option', select).filter(function (o) { return o.value === city; })[0];
      if (option) select.value = city;
    }
    $$('.city').forEach(function (card) {
      card.classList.toggle('is-selected', card.getAttribute('data-city') === city);
    });
    updateSummary();
    toast(city + ' ausgewählt – jetzt Ticket sichern', 'assets/icons/check.png');

    var order = $('#bestellen');
    if (order) order.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function openDrawer() {
    if (!wishlistDrawer) return;
    renderWishlist();
    wishlistDrawer.hidden = false;
    if (overlay) overlay.hidden = false;
    requestAnimationFrame(function () {
      wishlistDrawer.classList.add('is-open');
      if (overlay) overlay.classList.add('is-visible');
    });
    document.body.classList.add('is-locked');
    if (wishlistToggle) wishlistToggle.setAttribute('aria-expanded', 'true');
    var close = $('.drawer__close', wishlistDrawer);
    if (close) close.focus();
  }

  function closeDrawer() {
    if (!wishlistDrawer) return;
    wishlistDrawer.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.classList.remove('is-locked');
    if (wishlistToggle) wishlistToggle.setAttribute('aria-expanded', 'false');
    setTimeout(function () {
      wishlistDrawer.hidden = true;
      if (overlay && !$('.modal.is-open')) overlay.hidden = true;
      if (wishlistToggle) wishlistToggle.focus();
    }, 300);
  }

  if (wishlistToggle) {
    wishlistToggle.addEventListener('click', function () {
      if (wishlistDrawer && wishlistDrawer.classList.contains('is-open')) closeDrawer();
      else openDrawer();
    });
  }
  $$('[data-close-drawer]').forEach(function (el) { el.addEventListener('click', closeDrawer); });

  /* ------------------------------------------------------------------ *
   * Account modal
   * ------------------------------------------------------------------ */
  var accountToggle = $('#accountToggle');
  var accountModal = $('#accountModal');

  function openModal() {
    if (!accountModal) return;
    accountModal.hidden = false;
    if (overlay) overlay.hidden = false;
    requestAnimationFrame(function () {
      accountModal.classList.add('is-open');
      if (overlay) overlay.classList.add('is-visible');
    });
    document.body.classList.add('is-locked');
    if (accountToggle) accountToggle.setAttribute('aria-expanded', 'true');
    var first = $('input', accountModal);
    if (first) first.focus();
  }

  function closeModal() {
    if (!accountModal) return;
    accountModal.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-visible');
    document.body.classList.remove('is-locked');
    if (accountToggle) accountToggle.setAttribute('aria-expanded', 'false');
    setTimeout(function () {
      accountModal.hidden = true;
      if (overlay && !$('.drawer.is-open')) overlay.hidden = true;
      if (accountToggle) accountToggle.focus();
    }, 300);
  }

  if (accountToggle) accountToggle.addEventListener('click', openModal);
  $$('[data-close-modal]').forEach(function (el) { el.addEventListener('click', closeModal); });
  if (overlay) overlay.addEventListener('click', function () { closeModal(); closeDrawer(); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (accountModal && !accountModal.hidden) closeModal();
    if (wishlistDrawer && !wishlistDrawer.hidden) closeDrawer();
    toggleNav(false);
  });

  $$('.tabs__btn').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var name = tab.getAttribute('data-tab');
      $$('.tabs__btn').forEach(function (t) {
        var active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      $$('.modal__form').forEach(function (form) {
        form.hidden = form.getAttribute('data-panel') !== name;
      });
    });
  });

  ['#loginForm', '#registerForm'].forEach(function (sel) {
    var form = $(sel);
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var mail = $('input[type="email"]', form);
      if (mail && !mail.checkValidity()) { mail.reportValidity(); return; }
      var pass = $('input[type="password"]', form);
      if (pass && pass.value.length < 6) {
        pass.setCustomValidity('Mindestens 6 Zeichen');
        pass.reportValidity();
        pass.setCustomValidity('');
        return;
      }
      toast('Demo: Anmeldung ist auf dieser Landingpage nicht aktiv.', 'assets/icons/user.png');
      closeModal();
      form.reset();
    });
  });

  /* ------------------------------------------------------------------ *
   * Bestellformular
   * ------------------------------------------------------------------ */
  var orderForm = $('#orderForm');
  var orderSuccess = $('#orderSuccess');
  var orderCard = $('#orderCard');
  var cartCount = $('#cartCount');

  function currentQty() {
    var qty = $('#qty');
    return qty ? parseInt(qty.value, 10) || 1 : 1;
  }

  function updateSummary() {
    var qty = currentQty();
    var label = $('#summaryLabel');
    var price = $('#summaryPrice');
    if (label) label.textContent = qty + '× Promo-Ticket Lamborghini Huracán EVO';
    if (price) price.textContent = (qty * 19).toFixed(2).replace('.', ',') + ' €';
    if (cartCount) cartCount.textContent = String(qty);
  }

  var qtySelect = $('#qty');
  if (qtySelect) qtySelect.addEventListener('change', updateSummary);

  var citySelect = $('#citySelect');
  if (citySelect) {
    citySelect.addEventListener('change', function () {
      $$('.city').forEach(function (card) {
        card.classList.toggle('is-selected', card.getAttribute('data-city') === citySelect.value);
      });
    });
  }

  var cartToggle = $('#cartToggle');
  if (cartToggle) {
    cartToggle.addEventListener('click', function () {
      var target = $('#bestellen');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function setError(field, show) {
    var name = field.getAttribute('id');
    var error = $('[data-error-for="' + name + '"]');
    field.classList.toggle('is-invalid', show);
    if (error) error.hidden = !show;
  }

  if (orderForm) {
    var inputs = ['#firstName', '#lastName', '#email'].map(function (s) { return $(s); });

    inputs.forEach(function (input) {
      if (!input) return;
      input.addEventListener('input', function () {
        if (input.checkValidity()) setError(input, false);
      });
    });

    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      var firstInvalid = null;

      inputs.forEach(function (input) {
        if (!input) return;
        var valid = input.value.trim() !== '' && input.checkValidity();
        setError(input, !valid);
        if (!valid) { ok = false; firstInvalid = firstInvalid || input; }
      });

      var terms = $('#terms');
      var termsError = $('[data-error-for="terms"]');
      if (terms && !terms.checked) {
        ok = false;
        if (termsError) termsError.hidden = false;
        firstInvalid = firstInvalid || terms;
      } else if (termsError) {
        termsError.hidden = true;
      }

      if (!ok) {
        toast('Bitte prüfe die markierten Felder.', 'assets/icons/check.png');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var city = citySelect ? citySelect.value : '';
      var qty = currentQty();
      var name = $('#firstName').value.trim();
      var orderNo = 'E-SCC-' + String(Math.floor(100000 + Math.random() * 899999));

      $('#successName').textContent = name;
      $('#successQty').textContent = String(qty);
      $('#successOrder').textContent = orderNo;
      $('#successMail').textContent = $('#email').value.trim();

      orderForm.hidden = true;
      orderSuccess.hidden = false;
      orderSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      toast('Promo-Ticket reserviert – Bestellnummer ' + orderNo, 'assets/icons/check.png');

      if (city) {
        toast('Stadt ' + city + ' wurde deiner Bestellung zugeordnet.', 'assets/icons/pin.png');
      }
      if (cartCount) cartCount.textContent = String(qty);
    });

    var orderReset = $('#orderReset');
    if (orderReset) {
      orderReset.addEventListener('click', function () {
        orderForm.reset();
        inputs.forEach(function (input) { if (input) setError(input, false); });
        var termsError = $('[data-error-for="terms"]');
        if (termsError) termsError.hidden = true;
        $$('.city').forEach(function (card) { card.classList.remove('is-selected'); });
        updateSummary();
        orderSuccess.hidden = true;
        orderForm.hidden = false;
        $('#firstName').focus();
      });
    }
  }

  /* ------------------------------------------------------------------ *
   * Geschenk-Anlässe
   * ------------------------------------------------------------------ */
  $$('.occasion').forEach(function (btn) {
    btn.addEventListener('click', function () {
      $$('.occasion').forEach(function (b) { b.classList.toggle('is-active', b === btn); });
      var label = btn.getAttribute('data-occasion');
      var note = $('#occasionNote');
      if (!note) {
        note = document.createElement('p');
        note.id = 'occasionNote';
        note.className = 'prose';
        note.style.marginTop = '-12px';
        btn.closest('.occasions').insertAdjacentElement('afterend', note);
      }
      note.textContent = 'Anlass „' + label + '“ ausgewählt – der Gutschein wird passend verpackt und personalisiert.';
      toast('Anlass „' + label + '“ ausgewählt', 'assets/icons/gift.png');
    });
  });

  /* ------------------------------------------------------------------ *
   * Reveal on scroll + active nav link
   * ------------------------------------------------------------------ */
  var revealTargets = $$('.section > .container > *:not(.no-reveal), .cities .city, .reviews .review, .steps .step, .trust__item, .faq__item');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add('is-in');
        io.unobserve(el);
        setTimeout(function () {
          el.classList.remove('reveal', 'is-in');
          el.style.transitionDelay = '';
        }, 900);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    revealTargets.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 6, 5) * 45 + 'ms';
      io.observe(el);
    });

    var sections = ['erlebnis', 'so-funktionierts', 'tour', 'bewertungen', 'faq']
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        $$('.nav__link').forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { navObserver.observe(section); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ------------------------------------------------------------------ *
   * Misc
   * ------------------------------------------------------------------ */
  var year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { syncHeaderHeight(); onScroll(); });
  window.addEventListener('load', syncHeaderHeight);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeaderHeight);

  syncHeaderHeight();
  renderWishlist();
  syncCityHearts();
  updateSummary();
  onScroll();
})();
