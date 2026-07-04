// saffron kitchen - main js

document.addEventListener('DOMContentLoaded', function() {

    // mobile nav
    var menuBtn = document.querySelector('#menuBtn');
    var navLinks = document.querySelector('#navLinks');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        var links = document.querySelectorAll('#navLinks a');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                menuBtn.classList.remove('open');
                navLinks.classList.remove('open');
            });
        }
    }


    // menu filtering
    var filterBtns = document.querySelectorAll('.filter-btn');
    var menuItems = document.querySelectorAll('.menu-item');

    if (filterBtns.length > 0) {
        for (var i = 0; i < filterBtns.length; i++) {
            filterBtns[i].addEventListener('click', function() {
                // update active button
                document.querySelector('.filter-btn.active').classList.remove('active');
                this.classList.add('active');

                var filter = this.getAttribute('data-filter');

                for (var j = 0; j < menuItems.length; j++) {
                    var category = menuItems[j].getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        menuItems[j].classList.remove('hidden');
                    } else {
                        menuItems[j].classList.add('hidden');
                    }
                }
            });
        }
    }


    // contact form validation
    var contactSendBtn = document.querySelector('#contactSendBtn');

    if (contactSendBtn) {
        var cName = document.querySelector('#contactName');
        var cEmail = document.querySelector('#contactEmail');
        var cMsg = document.querySelector('#contactMsg');
        var cNameErr = document.querySelector('#contactNameErr');
        var cEmailErr = document.querySelector('#contactEmailErr');
        var cMsgErr = document.querySelector('#contactMsgErr');

        cName.addEventListener('input', function() { validateField(cName, cNameErr, 'name'); });
        cEmail.addEventListener('input', function() { validateField(cEmail, cEmailErr, 'email'); });
        cMsg.addEventListener('input', function() { validateField(cMsg, cMsgErr, 'message'); });

        contactSendBtn.addEventListener('click', function() {
            var a = validateField(cName, cNameErr, 'name');
            var b = validateField(cEmail, cEmailErr, 'email');
            var c = validateField(cMsg, cMsgErr, 'message');
            if (a && b && c) {
                document.querySelector('#contactSendBtn').closest('.form-card').classList.add('sent');
            }
        });

        document.querySelector('#contactAgainBtn').addEventListener('click', function() {
            resetForm(this.closest('.form-card'), [cName, cEmail, cMsg], [cNameErr, cEmailErr, cMsgErr]);
        });
    }


    // reservation form validation
    var reserveBtn = document.querySelector('#reserveBtn');

    if (reserveBtn) {
        var rName = document.querySelector('#resName');
        var rPhone = document.querySelector('#resPhone');
        var rDate = document.querySelector('#resDate');
        var rTime = document.querySelector('#resTime');
        var rGuests = document.querySelector('#resGuests');
        var rNameErr = document.querySelector('#resNameErr');
        var rPhoneErr = document.querySelector('#resPhoneErr');
        var rDateErr = document.querySelector('#resDateErr');
        var rTimeErr = document.querySelector('#resTimeErr');
        var rGuestsErr = document.querySelector('#resGuestsErr');

        // set min date to today
        var today = new Date().toISOString().split('T')[0];
        rDate.setAttribute('min', today);

        rName.addEventListener('input', function() { validateField(rName, rNameErr, 'name'); });
        rPhone.addEventListener('input', function() { validateField(rPhone, rPhoneErr, 'phone'); });
        rDate.addEventListener('change', function() { validateField(rDate, rDateErr, 'required'); });
        rTime.addEventListener('change', function() { validateField(rTime, rTimeErr, 'required'); });
        rGuests.addEventListener('change', function() { validateField(rGuests, rGuestsErr, 'required'); });

        reserveBtn.addEventListener('click', function() {
            var a = validateField(rName, rNameErr, 'name');
            var b = validateField(rPhone, rPhoneErr, 'phone');
            var c = validateField(rDate, rDateErr, 'required');
            var d = validateField(rTime, rTimeErr, 'required');
            var e = validateField(rGuests, rGuestsErr, 'required');
            if (a && b && c && d && e) {
                document.querySelector('#reserveBtn').closest('.form-card').classList.add('sent');
            }
        });

        document.querySelector('#reserveAgainBtn').addEventListener('click', function() {
            resetForm(this.closest('.form-card'), [rName, rPhone, rDate, rTime, rGuests], [rNameErr, rPhoneErr, rDateErr, rTimeErr, rGuestsErr]);
        });
    }


    // validation helper
    function validateField(input, errEl, type) {
        var val = input.value.trim();

        if (type === 'name') {
            if (val.length < 2) {
                errEl.textContent = val.length === 0 ? 'Required.' : 'At least 2 characters.';
                input.className = 'bad';
                return false;
            }
        }

        if (type === 'email') {
            if (val.length === 0) { errEl.textContent = 'Required.'; input.className = 'bad'; return false; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { errEl.textContent = 'Enter a valid email.'; input.className = 'bad'; return false; }
        }

        if (type === 'message') {
            if (val.length < 10) {
                errEl.textContent = val.length === 0 ? 'Required.' : 'At least 10 characters.';
                input.className = 'bad';
                return false;
            }
        }

        if (type === 'phone') {
            if (val.length < 7) {
                errEl.textContent = val.length === 0 ? 'Required.' : 'Enter a valid phone number.';
                input.className = 'bad';
                return false;
            }
        }

        if (type === 'required') {
            if (!val) { errEl.textContent = 'Required.'; input.className = 'bad'; return false; }
        }

        errEl.textContent = '';
        input.className = 'good';
        return true;
    }

    // reset form helper
    function resetForm(card, inputs, errors) {
        card.classList.remove('sent');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            inputs[i].className = '';
        }
        for (var i = 0; i < errors.length; i++) {
            errors[i].textContent = '';
        }
    }

});