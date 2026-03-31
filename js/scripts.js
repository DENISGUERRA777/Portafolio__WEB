'use strict';

document.addEventListener('DOMContentLoaded', function () {

    /* -------------------------------------------------------
       Gallery modal – Bootstrap 5 native API
    ------------------------------------------------------- */
    var modalEl = document.getElementById('modalImagen');
    var modalImagen = document.getElementById('imagen-modal');

    if (modalEl && modalImagen) {
        var imagenModal = new bootstrap.Modal(modalEl);

        document.querySelectorAll('.galeria .imagen-link').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var img = link.querySelector('img');
                if (img) {
                    modalImagen.src = img.src;
                    modalImagen.alt = img.alt;
                }
                imagenModal.show();
            });
        });
    }

    /* -------------------------------------------------------
       Smooth scroll for nav links
    ------------------------------------------------------- */
    document.querySelectorAll('.nav-link-item').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    /* -------------------------------------------------------
       Active nav highlight on scroll
    ------------------------------------------------------- */
    var sections = document.querySelectorAll('main section[id]');
    var navLinks = document.querySelectorAll('.nav-link-item');

    function setActiveLink() {
        var scrollY = window.scrollY + 120;
        var current = '';

        sections.forEach(function (section) {
            if (scrollY >= section.offsetTop) {
                current = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});
