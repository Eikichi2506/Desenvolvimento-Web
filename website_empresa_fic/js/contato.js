const ContatoPage = {
    template: `
        <section class="contato">
            <h2>Contato</h2>
            <p>Entre em contato conosco para mais informações sobre nossos serviços ou para solicitar um orçamento!</p>
            
            <form @submit.prevent="enviarFormulario">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="nome" required placeholder="Seu nome">

                <label for="email">E-mail:</label>
                <input type="email" id="email" v-model="email" required placeholder="Seu e-mail">

                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" v-model="mensagem" required placeholder="Escreva sua mensagem"></textarea>

                <button class="button-contato" type="submit">Enviar</button>
            </form>

            <p v-if="mensagemEnviada" class="success">Obrigado, {{ nome }}! Entraremos em contato em breve.</p>

            <h3>Outras formas de contato</h3>
            <p><strong>Telefone:</strong> +55 47 98765-4321</p>
            <p><strong>Email:</strong> contato@solarwave.com</p>
            <p><strong>Endereço:</strong> Rua Inambu, 520 , Joinville, SC, Brasil</p>
        </section>
    `,
    data() {
        return {
            nome: '',
            email: '',
            mensagem: '',
            mensagemEnviada: false
        };
    },
    methods: {
        enviarFormulario() {
            this.mensagemEnviada = true;
            this.nome = '';
            this.email = '';
            this.mensagem = '';
        }
    }
};
