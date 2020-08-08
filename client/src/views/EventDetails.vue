<template>
  <div class="container">
    <h1>{{eventInfo.name}}</h1>
    <p>{{eventInfo.startDateTime}}</p>
    <p>{{eventInfo.startDateTime}}</p>
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

@Component
export default class EventDetails extends Vue {
  private eventInfo: object = {
      id: 12432432,
      name: "Case 1 - Oxford University presentation",
      shortDescription: "After preparing your case, you will present to our judging panel.",
      startDateTime: new Date(2020, 10, 12, 19, 0),
      meetingLink: "https://www.google.com"
    };
}
</script>