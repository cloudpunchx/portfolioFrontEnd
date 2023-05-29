<template>
    <div class="container">
        <div class="welcomeContainer">
            <h3>Let's chat. Tell me about your project.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi totam esse mollitia reiciendis dolore animi unde perferendis alias, quisquam at autem? Perspiciatis ipsa inventore sapiente.</p>
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
                            label="Label"
                            name="content" 
                            placeholder="Enter Your Message" 
                            cols="100" 
                            rows="5" 
                            filled
                            clearable
                            ></v-textarea>

                            <v-col cols="12">
                                <v-btn color="primary">Submit</v-btn>
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
        name: "ContactMe"
    }
</script>

<style scoped>
/* .centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F7F4EA;
}

.contactForm {
    width: 50%;
    padding: 25px;
    margin: 25px;
    background-color: #c0b9dd;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.v-text-field{
    border-radius: 5px;
} */

.container {
    display: flex;
}

.welcomeContainer {
    flex: 1;
    /* play with padding */
    padding: 150px;
    margin: 25px;
    background-color: #F7F4EA;
}

.centered-container {
    flex: 2;
    justify-content: center;
    align-items: center;
    background-color: #F7F4EA;
}

.contactForm {
    padding: 25px;
    margin: 25px;
    /* background-color: #c0b9dd;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
}

.v-text-field {
    border-radius: 5px;
}

h3{
    font-size: 40pt;
}

p{
    font-size: 18pt;
}
</style>