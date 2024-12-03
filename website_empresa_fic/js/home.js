const HomePage = {
    template: `
        <section class="home">
            <div class="banner">
                <h2 class="linha-sub">Bem-vindo à SolarWave!</h2>
                <p>A SolarWave traz soluções inteligentes e acessíveis para você aproveitar o máximo da energia solar.</p>
            </div>
            <div class="beneficios">
                <h3>Por que escolher a SolarWave?</h3>
                <ul>
                    <li><strong>Reduza sua conta de energia:</strong> Economize até 90% com a energia solar.</li>
                    <li><strong>Contribua para o planeta:</strong> Use fontes de energia renováveis e ajude a preservar o meio ambiente.</li>
                    <li><strong>Instalação rápida:</strong> Oferecemos soluções práticas e rápidas para sua casa ou empresa.</li>
                    <li><strong>Suporte 24/7:</strong> Nossa equipe está sempre pronta para oferecer suporte e garantir a melhor experiência.</li>
                </ul>
            </div>
            <div class="chamada-para-acao">
                <h3>Entre em contato agora para saber mais!</h3>
                <p>Não perca tempo! Faça parte da revolução da energia solar.</p>
                <button type="button" class="fale-conosco" @click="$root.setPage('contato')">Fale Conosco</button>
            </div>
        </section>
    `
};
