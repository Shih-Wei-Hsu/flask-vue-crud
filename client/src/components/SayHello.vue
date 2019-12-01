<template>
  <div>
    <b-container>
      <h1 class="text-center font-weight-bold">Say Hello <small>to the world</small></h1>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
        <b-form-group
          id="input-group-1"
          label="Name:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Message:"
          label-for="input-2"
          description=""
        >
          <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              >
          </b-form-textarea>
        </b-form-group>

        <pre class="mt-3 mb-0">{{ text }}</pre>
        <br>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <h1 class="font-weight-bold">{{ messages_num }} messages</h1>
      <b-list-group >
        <b-list-group-item v-for="(message) in messages" :key='message.id'>
          <h4>{{ message.name }}
            <small>#{{ message.id }} </small>
            <small class="float-right text-right">at {{ message.timestamp }}</small>
          </h4>
          <p>{{ message.body }}</p>
        </b-list-group-item>
      </b-list-group>
      <br>
      <br>
      <h6 class="text-center">@2019 Xu Shiwei/Github/client</h6>
      <br>
    </b-container>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SayHello',
  data() {
    return {
      text: '',
      messages: [],
      messages_num: 0,
      form: {
        name: '',
        food: null,
        checked: [],
      },
      show: true,
    };
  },
  created() {
    this.getMessages();
  },
  methods: {
    getMessages() {
      const path = 'http://localhost:5000/';
      axios.get(path).then((res) => {
        console.log(res.data);
        this.messages = res.data;
        this.messages_num = res.data.length;
      }).catch((error) => {
        // eslint-disable-next-line
        console.log(error)
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      this.text = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
