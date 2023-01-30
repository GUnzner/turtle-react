import React from 'react';

export default function Contact(){
    return (
        <><section class="content-section container">
            <h2 class="section-header">Contact us</h2>

            <form class="form" action="https://formsubmit.co/de80cbb99f8354174954316160f9cb98" method="POST">
                <div>
                    <label>Full name(*)</label>
                    <div>
                        <input type="text" name="name" pattern="[a-zA-Z ]+" required />
                    </div>
                </div>
                <div>
                    <label>Email address(*)</label>
                    <div>
                        <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required="required,email" />
                    </div>
                </div>
                <div>
                    <label for="phone">Phone number</label>
                    <div>
                        <input type="tel" name="phone" pattern="[0-9+]+" />
                    </div>
                </div>
                <div>
                    <label>Message(*)</label>
                    <div>
                        <textarea type="text" name="message" placeholder="Enter your message here..." maxlength="1000" style={{height: '10rem'}} required="required"></textarea>
                    </div>
                </div>
                <button class="button" type="submit">Send</button>
            </form>

        </section>
        <br />
        <section class="content-section container">
                <h3 class="small-header">Find us</h3>
                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255345.72472220365!2d-90.8494165252299!3d-0.26092301444182975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9aab23acc78137a5%3A0x2a4992f090979738!2sSantiago%20Island!5e0!3m2!1sen!2sit!4v1645800668802!5m2!1sen!2sit" 
                width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </section></>
    )
}