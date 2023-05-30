<template>
    <div class="container">
        <div class="welcomeContainer">
            <h3>Let's chat.</h3>
            <p>Feel free to get in touch with me to request a copy of my resume or to initiate a conversation about your project, aiming to collaborate and generate a quote.
                You can also reach out to me directly via email at <a href="mailto:siobhanbonardi@gmail.com">siobhanbonardi@gmail.com</a></p>
        </div>

        <div class="centered-container">
            <div class="contactForm">
                <v-form v-model="valid">
                    <v-container class="form-container">
                        <v-row dense>
                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                            color="primary"
                            v-model="name"
                            label="Name"
                            background-color="rgba(247, 244, 234, 0.3)"
                            required
                            filled
                            clearable
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                            color="primary"
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            background-color="rgba(247, 244, 234, 0.3)"
                            required
                            filled
                            clearable
                            ></v-text-field>
                            </v-col>

                            <v-col
                            cols="12"
                            md="4"
                            >
                            <v-text-field
                            color="primary"
                            v-model="company"
                            label="Company (Optional)"
                            background-color="rgba(247, 244, 234, 0.3)"
                            filled
                            clearable
                            ></v-text-field>
                            </v-col>

                            <v-textarea
                            background-color="rgba(247, 244, 234, 0.3)"
                            color="primary"
                            label="Message"
                            name="content" 
                            placeholder="Enter Your Message" 
                            cols="50" 
                            rows="5" 
                            filled
                            clearable
                            ></v-textarea>

                            <v-col cols="12">
                                <v-btn color="primary"
                                >Submit</v-btn>
                            </v-col>
                            
                        </v-row>
                        
                    </v-container>
                    
                </v-form>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactMe",
    data() {
        return {
                
            };
    },
    methods: {

        },
    }
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.welcomeContainer {
    text-align: start;
    padding: 150px;
    margin: 25px;
    background-color: #f7f4ea;
    max-width: 900px;
}

.centered-container {
    flex: 1;
    background-color: #f7f4ea;
    max-width: 900px;
    margin-top: 100px;
}

h3 {
    font-size: 50pt;
    font-family: lobster;
    color: #FF7E6B;
}

p {
    font-size: 18pt;
}

a{
    text-decoration: none;
    transition: font-size 0.2s;
}

a:hover{
    font-size: 20pt;
}

a:active{
    font-size: 20pt;
}

.v-btn{
    font-size: 15pt;
    font-family: playfair;
    width: 130px;
}

</style>