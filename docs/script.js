
 document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                const nombreAtraccion = this.querySelector('h3').textContent;
                
                if(url && confirm(`¿Desea ver más información sobre ${nombreAtraccion}?`)) {
                    window.location.href = url;
                }
            });
        });
    });