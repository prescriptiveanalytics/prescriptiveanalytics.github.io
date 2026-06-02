---
layout: home
lang: de
---

<section class="bg-primary-light" id="info">
    <div class="container">
        <h2 class="section-heading">Projektinformation</h2>
        
        
        <!--
        <div class="row">
            <div class="col-lg-7 col-md-12">
                 <p class="text-justify">
                 Vorhersagen prägen unser aller Leben – im Privaten wie auch im Beruflichen. Dabei reicht das Spektrum von der alltäglichen Wettervorhersage, über die Prognose von Krankheitsverläufen, bis hin zur Bestimmung optimaler Wartungszeitpunkte für industrielle Anlagen. Einen wesentlichen Anteil am Erfolg von Vorhersagen ist der Anwendung und kontinuierlichen Weiterentwicklung computergestützter Technologien, wie Simulation oder Machine Learning, zuzuschreiben. Die Information einer Vorhersage wirft jedoch zwangsläufig die Frage nach einer akkuraten Reaktion, also Weiterverarbeitung der Information, auf. Mit dieser Frage beschäftigt sich das derzeit noch im Aufbau befindliche Forschungsfeld der Prescriptive Analytics: Die datenbasierte Ableitung von Handlungsempfehlungen. Um genaue aber auch vertrauenswürdige Empfehlungen zu generieren ist eine Vereinigung mehrerer Technologiefelder notwendig.
                </p>
            </div>
            <div class="col-lg-5 col-md-12 text-center">
                <figure class="image-box"><img id="image-sketch1" src="/{{ site.data.assets.image-sketch1 }}" /></figure>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5 col-md-12 text-center">
                <figure class="image-box"><img id="image-sketch2" src="/{{ site.data.assets.image-sketch2 }}" /></figure>
            </div>
            <div class="col-lg-7 col-md-12">
                 <p class="text-justify">
                 Neben der Genauigkeit und Vertrauenswürdigkeit von Handlungsempfehlungen, ist besonders die Geschwindigkeit ihrer Erstellung von großer Bedeutung, um Maßnahmen möglichst schnell einleiten zu können. Im Rahmen des Forschungsprojekts Secure Prescriptive Analytics soll ein neues Modellierungskonzept entwickelt werden, das es ermöglicht ein komplexes Gesamtsystem - z.B. eine industrielle Anlage - variabel granular aufzutrennen und in Teilmodelle abzubilden. Für jedes Teilmodel werden anschließend sogenannte Stellvertretermodelle trainiert, die in ihrer Auswertung schneller als ihr Vorbild sind. Die Entwicklung der Stellvertretermodelle soll, den Anforderungen der Domänenexperten entsprechend, mit verschiedenen Methoden - z.B. mithilfe von Clear-Box oder Privacy Preserving Machine Learning  - erfolgen können. Anschließend werden die Teilmodelle zu einem beschleunigten digitalen Abbild des Gesamtsystems zusammengesetzt. 
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7 col-md-12">
                 <p class="text-justify">
                 Im Rahmen des Forschungsprojekts, wird das skizzierte Modellierungskonzept in Form einer Open Source Software Plattform umgesetzt, die die Verknüpfung von Modellen und Optimierungskomponenten unterstützen soll. Verwender der Plattform wird es ermöglicht, Problemstellungen zu definieren - z.B. die Optimierung bestehender Produktionspläne unter Verwendung des definierten Modells und diverser Einschränkungen (Berechnungslaufzeit, Vertraulichkeit von Daten, Modellinterpretationsfähigkeit) - und entsprechende Handlungsempfehlungen zu erhalten. Hauptziel des Projekts ist somit die Entwicklung eines Prescriptive Analytics Konzepts und dessen nachaltige Implementierung, das bestehende Forschungsdisziplinen vereint und komplexe, anwendungsnahe Optimierungsfragestellungen lösbar macht.
                </p>
            </div>
            <div class="col-lg-5 col-md-12 text-center">
                <figure class="image-box"><img id="image-sketch3" src="/{{ site.data.assets.image-sketch3 }}" /></figure>
            </div>
        </div>
        -->

        <div class="row">
            <div class="col-lg-12 col-md-12">
                <p class="text-justify">
                    Das Projekt Auto Prescriptive Analytics wird durch das Land Oberösterreich finanziert als Teil des Programms des Landes Oö. zur Stimulierung der Erschließung / Erweiterung von zukunftsweisenden Forschungsfeldern bei den Oö. außeruniversitären Forschungseinrichtungen im Zeitraum 01.01.2022 – 31.12.2029. Nähere Informationen zur Wirtschafts- und Forschungsstrategie #upperVISION2030 (Handlungsfeld "Digitale Transformation") unter <a href="{{ site.data.i18n.t.footer.uv30-link[page.lang] }}">www.uppervision.at</a>.
                </p>
            </div>
            <div class="col-lg-12 col-md-12 facts">
                <div>
                <h4 class="info-headline">Projektdaten</h4>
                <table class="info-table">
                    <tr><td>Titel:</td><td>Auto Prescriptive Analytics</td></tr>
                    <tr><td>Laufzeit:</td><td>01/2026 - 12/2029</td></tr>
                    <tr><td>Team:</td><td>FH Oberösterreich Campus Hagenberg, RISC Software GmbH, SCCH Software Competence Center GmbH</td></tr>
                    <tr><td>Themen:</td><td>Dynamic Optimization, Modeling and Simulation, Interpretable Machine Learning, Agentic AI</td></tr>
                    <tr><td>Fördergeber:</td><td>Land Oberösterreich, nähere Informationen unter <a href="{{ site.data.i18n.t.footer.uv30-link[page.lang] }}">www.uppervision.at</a></td></tr>
                </table>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-lg-12 col-md-12">
                <br/>
                <p class="text-justify">Ein Hauptziel des Projekts besteht in der Dissemination der gewonnenen Erkenntnisse in Form öffentlicher Vorträge, Workshops mit Industriebetrieben und Publikationen in wissenschaftlichen Journalen und Magazinen.</p>
                <a href="/publications" id="btn-publications" class="btn btn-xl btn-slim-primary">Publikationen</a>
            </div>
        </div> -->
    </div>
</section>

<section class="bg-dark" id="blog">
    <div class="container">
        <h2>Von unserem Blog</h2>
        {% if site.posts.size > 0 %}
        <div class="row">
            <div class="col-lg-12 col-md-12">
                {% for post in site.posts limit:3 %}
                    {% include post_preview.html %}
                {% endfor %}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-right">
                <a href="/blog" id="btn-blog" class="btn btn-xl btn-slim-primary blog-button">Mehr von unserem Blog</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>Tut uns Leid, im Moment stehen keine Beiträge zu diesem Thema zur Verfügung.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="" id="team">
    <div class="container">
        <h2 class="section-heading">Team</h2>
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <p>Die Entwicklung innovativer Methoden und Konzepte im neuen Forschungsfeld Secure Prescriptive Analytics verlangt nach der Synthese einer Vielzahl an Forschungsdisziplinen und Technologien. Ein Schlüssel zum Erfolg dieses Forschungsprojekts liegt daher in der Zusammenarbeit eines interdispziplinären Teams, das verschiedene Kompetenzen einbringt und zusammenführt. Am Projekt Secure Prescriptive Analytics sind Forscher der <i>Softwarepark Hagenberg</i>-Organisationen <i>FH OÖ F&E GmbH Forschungsgruppe HEAL, RISC Software GmbH</i> und <i>Software Competence Center Hagenberg GmbH</i> beteiligt.</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row image-row">
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.fhooe[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-fhlogo" src="/{{ site.data.assets.image-fhlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">            
                <a target="_blank" href="{{ site.data.i18n.t.links.risc[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-risclogo" src="/{{ site.data.assets.image-risclogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.scch[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-scchlogo" src="/{{ site.data.assets.image-scchlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
            <div class="col-lg-3 col-md-12 text-center topic-box">
                <a target="_blank" href="{{ site.data.i18n.t.links.swph[page.lang] }}"><br/>
                <figure class="image-box"><img id="image-swphlogo" src="/{{ site.data.assets.image-swphlogo }}" /></figure>
                <br/><br/><br/></a>
            </div>
        </div>
    </div>
</section>

<!-- <section class="" id="partners">
    <div class="container">
        <h2 class="section-heading">Partner</h2>
    </div>
</section> -->

<section class="bg-secondary" id="contact">
    <div class="container text-justify">
        <h2 class="section-heading">Kontakt</h2>
        <div class="row contact-info">
            <div class="col-lg-6 col-md-12">
                <h4>FH-Prof. PD DI Dr. Michael Affenzeller</h4>
                <table class="info-table">
                    <tr><td>Funktion:</td><td>Projektleitung</td></tr>
                    <tr><td>Tel.:</td><td>+43 50804 22031</td></tr>                  
                    <tr><td>Mail:</td><td><a href="mailto:michael.affenzeller@fh-hagenberg.at">michael.affenzeller@fh-hagenberg.at</a></td></tr>
                </table>
            </div>
            <div class="col-lg-6 col-md-12">
                <h4>Mag. Michaela Beneder</h4>
                <table class="info-table">
                    <tr><td>Funktion:</td><td>Koordination</td></tr>
                    <tr><td>Tel.:</td><td>+43 664 80484 27160</td></tr>                    
                    <tr><td>Mail:</td><td><a href="mailto:michaela.beneder@fh-hagenberg.at">michaele.beneder@fh-hagenberg.at</a></td></tr>
                </table>
            </div>
        </div>
    </div>
</section>

<section class="map-section">
    <div id="map"></div>
</section>