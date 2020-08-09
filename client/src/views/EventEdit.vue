<template>
  <div class="container">
    <h1>Modify event</h1>
    <form>
      <div class="form-group">
        <label for="eventName" class="form-label">Event name</label>
        <input type="text" class="form-control" id="eventName" placeholder="Name" v-model="eventToModify.name" required>
      </div>

      <div class="form-group">
        <label for="eventDate" class="form-label">Date</label>
        <input type="date" class="form-control" id="eventDate" v-model="eventToModify.eventDate" required>
      </div>

      <div class="form-group">
        <label for="eventTime" class="form-label">Time <span class="text-muted">(local time zone)</span></label>
        <input type="time" class="form-control" id="eventTime" v-model="eventToModify.eventTime" required>
      </div>
    
      <div class="form-group">
        <label for="shortDescription" class="form-label" placeholder="Quick summary of the event">Short description</label>
        <input type="text" class="form-control" id="shortDescription" v-model="eventToModify.shortDescription" maxlength="100">
      </div>

      <div class="form-group">
        <label for="meetingLink" class="form-label">Meeting link <span class="text-muted">(optional)</span></label>
          <input type="text" class="form-control" id="meetingLink" v-model="eventToModify.meetingLink">
      </div>

      <div class="form-group">
        <label for="longDescription" class="form-label">Event description <span class="text-muted">(Use Markdown syntax.)</span></label>
        <textarea class="form-control" id="longDescription" v-model="eventToModify.longDescription"></textarea>
      </div>

      <div class="form-group">
        <label for="hiddenDescription" class="form-label">Time-controlled description <span class="text-muted">(Revealed once event commences. Use Markdown syntax.)</span></label>
        <textarea class="form-control" id="hiddenDescription" v-model="eventToModify.hiddenDescription"></textarea>
      </div>

    </form>

    <div class="form-action-btns">
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-secondary">Cancel</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
textarea {
  min-height: 15rem;
}

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

.form-label {
  font-weight: bold;

  .text-muted {
    font-weight: normal;
  }
}

.form-action-btns {
  button {
    float: left;
    margin-right: 0.5rem;
  }
}

</style>

<script lang="ts">
import showdown from 'showdown';
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator'

const sdConverter = new showdown.Converter();

@Component
export default class EventDetails extends Vue {
  private eventToModify: any = {
    id: 12432432,
    name: "Case 1 - Oxford University presentation",
    shortDescription: "After preparing your case, you will present to our judging panel.",
    longDescription: "# H1\nLorem\n## H2\nipsum\n\n![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)",
    hiddenDescription: "Revealed when event commences",
    eventDate: '2019-01-01',
    eventTime: '09:00',
    meetingLink: "https://www.google.com"
  };

  private get eventInfo(): any {
    const time = moment.utc(this.eventToModify.eventTime, "hh:mm");

    return {
      id: this.eventToModify.id,
      name: this.eventToModify.name,
      shortDescription: this.eventToModify.shortDescription,
      longDescription: this.eventToModify.longDescription,
      startDateTime: moment(this.eventToModify.eventDate).hour(time.hour()).minute(time.minute()).toISOString(),
      meetingLink: this.eventToModify.meetingLink,
    };
  }
}
</script>