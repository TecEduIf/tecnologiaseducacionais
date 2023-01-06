
//Contador de acessos
<a href="https://www.webcontadores.com" title="contador de visitas tumblr">
<img src="https://counter6.optistats.ovh/private/webcontadores.php?c=eqj31g1e5cgrt7fby2575h6k8hz26y6r" border="0" title="contador de visitas tumblr" alt="contador de visitas tumblr"></a>

/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
(function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;
        
        if (!body) return;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
})();
