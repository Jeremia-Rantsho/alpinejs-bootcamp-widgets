

function greet() {
    return {
        name: '',
        language: 'sotho',
        greeting: '',
        updateGreeting() {
            const greetings = {
                sotho: 'Dumela',
                en: 'Hello',
                tur: 'Merhaba',
                sw: 'Hujambu?'
            };
            this.greeting = this.name ? `${greetings[this.language]}, ${this.name}` : '';
            setTimeout(() => {
                this.name = '';
                this.greeting = '';
                this.clearPizzacart();
            }, 5000);
        }
    };
}