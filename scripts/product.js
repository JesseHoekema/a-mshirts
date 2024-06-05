document.addEventListener('snipcart.ready', function() {
    Snipcart.api.session.setLanguage('nl');
});
document.addEventListener('snipcart.ready', function() {
    // Haal het aantal items in het winkelwagentje op
    var itemCount = Snipcart.store.getState().cart.items.length;
    // Update de weergave van het aantal items in de winkelwagen
    document.querySelector('.snipcart-items-count').textContent = itemCount;
});