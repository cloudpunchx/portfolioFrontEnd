<template>
    <div class="container">
        <div class="contactMsg">
            <h3>Let's connect</h3>
            <p>
                I'd love to discuss new projects or opportunities. Fill out the
                form below or send me an email.
                <a class="email" href="mailto:siobhanbonardi@gmail.com"
                    >siobhanbonardi@gmail.com</a
                >
            </p>
        </div>

        <div class="contactForm">
            <v-form>
                <v-row dense justify="center">
                    <v-col cols="12" sm="12" md="4">
                        <v-text-field
                            color="white"
                            v-model="name"
                            label="Name"
                            background-color="rgba(247, 244, 234, 0.3)"
                            required
                            filled
                            clearable
                            outlined
                            shaped
                            dark
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                        <v-text-field
                            color="white"
                            v-model="email"
                            label="E-mail"
                            background-color="rgba(247, 244, 234, 0.3)"
                            required
                            filled
                            clearable
                            outlined
                            shaped
                            dark
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="4">
                        <v-text-field
                            color="white"
                            v-model="company"
                            label="Company (Optional)"
                            background-color="rgba(247, 244, 234, 0.3)"
                            filled
                            clearable
                            outlined
                            shaped
                            dark
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="12" md="12">
                        <v-textarea
                            color="white"
                            v-model="message"
                            :value="message"
                            label="Message"
                            background-color="rgba(247, 244, 234, 0.3)"
                            placeholder="Enter Your Message"
                            cols="50"
                            rows="5"
                            filled
                            clearable
                            outlined
                            shaped
                            dark
                        ></v-textarea>
                    </v-col>

                    <v-col v-if="feedbackMsg" cols="12">
                        <p>{{ feedbackMsg }}</p>
                    </v-col>

                    <v-col cols="12">
                        <v-btn color="white" @click="submitContactForm"
                            >Submit
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ContactMe",
        data() {
            return {
                apiUrl: process.env.VUE_APP_API_URL,
                name: "",
                email: "",
                company: "",
                message: "",
                feedbackMsg: "",
            };
        },
        methods: {
            submitContactForm() {
                axios
                    .request({
                        url: this.apiUrl + "/contact-form",
                        method: "POST",
                        data: {
                            name: this.name,
                            email: this.email,
                            company: this.company,
                            message: this.message,
                        },
                    })
                    .then((response) => {
                        this.feedbackMsg = response.data;
                        this.clearForm();
                    })
                    .catch((error) => {
                        this.feedbackMsg = error.response.data;
                        this.clearForm();
                    });
            },
            clearForm() {
                this.name = "";
                this.email = "";
                this.company = "";
                this.message = "";
            },
        },
        mounted() {
            setTimeout(() => {
                this.feedbackMsg = "";
            }, 60000); // Hide after 1 minute
        },
        beforeDestroy() {
            // hide message when page is closed
            this.feedbackMsg = "";
        },
    };
</script>

<style scoped>
    .container {
        color: whitesmoke;
        padding-bottom: 60px;
        max-width: 60vw;
        margin: auto;
    }
    .email {
        font-size: 1.2rem;
        color: whitesmoke;
        text-decoration: none;
    }
    .email:hover {
        color: #ffd819;
    }

    h3 {
        font-size: 3rem;
        font-family: lobster;
    }

    p {
        font-size: 1.2rem;
    }

    .v-btn {
        font-size: 1rem;
        color: #7e72af;
    }

    @media (min-width: 1100px) {
        .container {
            padding: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .contactMsg {
            padding: 20px;
            margin-bottom: 200px;
        }

        p {
            font-size: 1.4rem;
        }

        .email {
            font-size: 1.5rem;
        }
    }
</style>
