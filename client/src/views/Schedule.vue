<template>
  <div class="container">
    <h1>Schedule</h1>
    <h2>My events</h2>
    <div id="event-cards">
      <div class="card" v-for="event in events" :key="event.id">
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="{ name: 'event-details', params: { id: event._id }}">{{ event.name }}</router-link>
          </h5>
          <p class="card-text event-date">{{ event.startDateTime }}</p>
          <p class="card-text">{{ event.shortDescription }}</p>
          <div v-if="event.meetingLink">
            <div class="btn btn-primary enter-meeting-btn">
              <a v-bind:href="event.meetingLink">
                <font-awesome-icon class="enter-meeting-icon" icon="door-open" />
              </a>
            </div>
            <a v-bind:href="event.meetingLink"><span class="text-muted">{{ event.meetingLink }}</span></a>
          </div>
        </div>
      </div>
    </div>
    <h2>Other events</h2>
    <div id="event-cards">
      <div class="card" v-for="event in events" :key="event.id">
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="{ name: 'event-details', params: { id: event._id }}">{{ event.name }}</router-link>
          </h5>
          <p class="card-text event-date">{{ event.startDateTime }}</p>
          <p class="card-text">{{ event.shortDescription }}</p>
          <div v-if="event.meetingLink">
            <div class="btn btn-primary enter-meeting-btn">
              <a v-bind:href="event.meetingLink">
                <font-awesome-icon class="enter-meeting-icon" icon="door-open" />
              </a>
            </div>
            <a v-bind:href="event.meetingLink"><span class="text-muted">{{ event.meetingLink }}</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: 0.5rem;
}

.card-title {
  margin-bottom: 0.2rem;;
}

.enter-meeting-btn {
  margin: 0 0.5rem 0 0;
  padding: 0.1rem 0.4rem;

  a {
    color: #fff;
  }
}

.enter-meeting-icon {
  font-size: 0.75rem;
}


.event-date {
  color: #555;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
}

.card-text:last-child {
    margin-bottom: 0;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Schedule extends Vue {
  private events: Array<object> = [];

  mounted(): void {
    console.log(process.env);
    axios.get(process.env.VUE_APP_API_ENDPOINT + "/event/").then((res) => {
      this.events = res.data;
    })
  }
}
</script>