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
                            :value="message"
                            background-color="rgba(247, 244, 234, 0.5)"
                            color="white"
                            label="Message"
                            name="content" 
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
                                <v-btn rounded large
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
                    // UPDATE URL ENDPOINT WHEN BUILT
                    url: this.apiUrl+"/user",
                    method: "POST",
                    data: {
                        name: this.name,
                        email: this.email,
                        company: this.company,
                        message: this.message,
                    }
                }).then((response)=>{
                    this.feedbackMsg = response;
                    this.clearForm();
                }).catch((error)=>{
                    this.feedbackMsg = error;
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
.email{
    color: #000000;
}

a{
    text-decoration: none;
    transition: font-size 0.2s;
}

a:hover{
    font-size: 20pt;
    color: #ffd819;
}

a:active{
    font-size: 20pt;
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
        padding: 150px;
        max-width: 900px;
    }
    .centered-container {
        flex: 1;
        max-width: 900px;
        margin-top: 100px;
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