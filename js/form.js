// Validação e envio do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            if(name.value === '' || email.value === '' || subject.value === '' || message.value === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            if(!isValidEmail(email.value)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            // Simulação de envio (substituir pelo FormSubmit ou outro método)
            this.submit();
            
            // Mensagem de sucesso (será substituída pelo redirecionamento do FormSubmit)
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
    
    // Validação do e-mail
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]');
            
            if(email.value === '' || !isValidEmail(email.value)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }
            
            // Simulação de cadastro
            alert('Obrigado por assinar nossa newsletter!');
            email.value = '';
        });
    }
});
