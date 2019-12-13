function showModal(e) {
    const portfolioItem = this.closest('.portfolio-elem-wrapper');
	const modalId = portfolioItem.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.classList.add('fade-in');
    console.log('fading in')
    document.body.style.overflow = "hidden";
    modal.style.display = 'block';
    modal.scrollTop = 0;
    setTimeout(function() {
        modal.classList.remove('fade-in');
    }, 1000);
}

function closeModal(e) {
    console.log(e.target.classList);
    if(!e.target.classList.contains('modal-background') && !e.target.classList.contains('close'))
        return;
    modal= this;
    modal.classList.add('fade-out');
    console.log('fading out')
    document.body.style.overflow = "visible";
    setTimeout(function() {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
    }, 1000);
}

window.onload = function() {
	// Event listeners for modals
	const portfolioItems = document.querySelectorAll('.portfolio-elem-wrapper');
	portfolioItems.forEach(function(portfolio) {
		portfolio.addEventListener('click', showModal, true);
	});
	const modals = document.querySelectorAll('.modal');
	modals.forEach(function(modal) {
		modal.addEventListener('click', closeModal, true);
	});
};