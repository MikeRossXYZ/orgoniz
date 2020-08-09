<template>
  <div class="container">
    <h1>{{eventInfo.name}}</h1>
    <div class="meeting-icon-info-pair">
      <font-awesome-icon class="pair-icon" icon="clock" />
      <p class="pair-info">{{ eventStartDate }}</p>
    </div>

    <div v-if="eventInfo.meetingLink" v-bind:href="eventInfo.meetingLink" class="meeting-icon-info-pair">
      <font-awesome-icon class="pair-icon" icon="door-open" />
      <a v-bind:href="eventInfo.meetingLink" class="pair-info">{{ eventInfo.meetingLink }}</a>
    </div>

    <div class="event-description">
      <div v-html="longDescription"></div>
    </div>

    <div v-if="eventInfo.hiddenDescription && isEventActive" class="event-description">
      <div v-html="hiddenDescription"></div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.meeting-icon-info-pair {
  margin-bottom: 0.5rem;

  .pair-icon {
    float: left;
    height: 1.25rem;
    margin-right: 1rem;
    width: 1.25rem;
  }

  .pair-info {
    font-size: 1.25rem;
    margin: 0 0 0 0;
  }
}

.event-description {
  border-top: 2px solid #444;
  margin: 2rem 0 0 0;
  padding: 2rem 0 0 0;
}

</style>

<script lang="ts">
import showdown from 'showdown';
import moment from 'moment';
import axios from 'axios';
import url from 'url';
import { Component, Vue } from 'vue-property-decorator'

const sdConverter = new showdown.Converter();

@Component
export default class EventDetails extends Vue {
  public eventInfo: any = {
    id: 12432432,
    name: "Case 1 - Oxford University presentation",
    shortDescription: "After preparing your case, you will present to our judging panel.",
    longDescription: "# H1\nLorem\n## H2\nipsum\n\n![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)",
    hiddenDescription: "Revealed when event commences",
    startDateTime: new Date(2020, 5, 12, 19, 0),
    meetingLink: "https://www.google.com"
  };

  created(): void {
    axios.get(url.resolve(process.env.VUE_APP_API_ENDPOINT, "event/" + this.$route.params.id)).then((res) => {
      this.eventInfo = res.data;
    });
  }

  private get longDescription(): string {
    if (this.eventInfo.longDescription)
      return sdConverter.makeHtml(this.eventInfo.longDescription);
    else
      return "";
  }

  private get hiddenDescription(): string {
    if (this.eventInfo.hiddenDescription) {
      return sdConverter.makeHtml(this.eventInfo.hiddenDescription);
    } else {
      return "";
    }
  }

  private get isEventActive(): boolean {
    return moment() >= moment.utc(this.eventInfo.startDateTime);
  }

  private get eventStartDate(): string {
    return moment(this.eventInfo.startDateTime).format('MMMM Do YYYY [at] h:mm a');
  }
}
</script>