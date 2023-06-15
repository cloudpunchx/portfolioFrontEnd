<template>
    <div class="container">
        <div class="welcomeContainer">
            <h3>Let's chat.</h3>
            <p>Feel free to get in touch with me to request a copy of my resume or to initiate a conversation about your project, aiming to collaborate and generate a quote.
                You can also reach out to me directly via email at <a class="email" href="mailto:siobhanbonardi@gmail.com">siobhanbonardi@gmail.com</a></p>
        </div>

        <div class="centered-container">
            <div class="contactForm">
                <v-form>
                    <v-container class="form-container">
                        <v-row dense>
                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                            color="white"
                            v-model="name"
                            label="Name"
                            background-color="rgba(247, 244, 234, 0.5)"
                            required
                            filled
                            clearable
                            outlined
                            shaped
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                            color="white"
                            v-model="email"
                            label="E-mail"
                            background-color="rgba(247, 244, 234, 0.5)"
                            required
                            filled
                            clearable
                            outlined
                            shaped
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                            color="white"
                            v-model="company"
                            label="Company (Optional)"
                            background-color="rgba(247, 244, 234, 0.5)"
                            filled
                            clearable
                            outlined
                            shaped
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="12"
                            >
                            <v-textarea
                            color="white"
                            v-model="message"
                            :value="message"
                            label="Message"
                            background-color="rgba(247, 244, 234, 0.5)"
                            placeholder="Enter Your Message" 
                            cols="50" 
                            rows="5" 
                            filled
                            clearable
                            outlined
                            shaped
                            ></v-textarea>
                            </v-col>

                            <v-col v-if="feedbackMsg" cols="12">
                                <p>{{ feedbackMsg }}</p>
                            </v-col>

                            <v-col cols="12">
                                <v-btn 
                                rounded
                                large
                                @click="submitContactForm"
                                >Submit
                                </v-btn>
                            </v-col>
                            
                        </v-row>
                        
                    </v-container>
                    
                </v-form>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

    export default {
        name: "ContactMe",
        data() {
            return {
                apiUrl : process.env.VUE_APP_API_URL,
                name: "",
                email: "",
                company: "",
                message: "",
                feedbackMsg: ""
            }
        },
        methods: {
            submitContactForm() {
                axios.request({
                    url: this.apiUrl+"/contact-form",
                    method: "POST",
                    data: {
                        name: this.name,
                        email: this.email,
                        company: this.company,
                        message: this.message,
                    }
                }).then((response)=>{
                    this.feedbackMsg = response.data;
                    this.clearForm();
                }).catch((error)=>{
                    this.feedbackMsg = error.response.data;
                    this.clearForm();
                })
            },
            clearForm(){
                this.name = "";
                this.email = "";
                this.company = "";
                this.message = "";
            },
        },
    }
</script>

<style scoped>

a{
    text-decoration: none;
    transition: font-size 0.2s;
}

a:hover{
    font-size: 20.5pt;
    color: #ffd819;
}

a:active{
    font-size: 20.5pt;
}

@media (min-width: 1px) {
    .container {
        align-items: center;
        background-color: #FF7E6B;
    }
    .welcomeContainer {
        padding: 10px;
        background-color: #FF7E6B;
    }

    .email{
        font-size: 14pt;
        color: whitesmoke;
        position: relative;
        overflow: hidden;
    }

    h3 {
        font-size: 35pt;
        font-family: lobster;
        color: whitesmoke;
    }
    p {
        font-size: 14pt;
        color: whitesmoke;
    }

    .v-btn{
        font-size: 13pt;
        font-weight: bold;
        width: 120px;
        color: #FF7E6B;
        background-color: whitesmoke;
    }

    .v-btn:hover{
        color: #ffd819;
        width: 120px;
    }
}

@media (min-width: 500px) {

}

@media (min-width: 800px) {
    .welcomeContainer {
        text-align: start;
        padding: 70px;
        max-width: 800px;
        margin-bottom: 100px;
    }
    .centered-container {
        flex: 1;
        max-width: 630px;
    }

    .email{
        font-size: 20pt;
        display: inline-block;
    }

        /* Animation for 'ripple' background color change effect on email link */
    .email::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #C0B9DD;
        animation: ripple 2s infinite;
    }

    /* Animation for 'ripple' background color change effect on email link */
    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        50% {
            transform: scale(2);
            opacity: 0;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }

    h3 {
        font-size: 50pt;
    }
    p {
        font-size: 18pt;
    }
    .v-btn{
        font-size: 15pt;
        font-weight: bold;
        width: 150px;
    }

    .v-btn:hover{
        width: 150px;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>