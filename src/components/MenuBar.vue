<script setup>
import IBiCalendarEvent from '~icons/bi/calendar-event'
import IBiPinMap from '~icons/bi/pin-map'
import IBiPersonCircle from '~icons/bi/person-circle'
import IBiJournalBookmark from '~icons/bi/journal-bookmark'
</script>

<template>
    <div class="menu">
        <b-button-group size="lg" style="width: 100%; height:70px;">
            <b-button :to="`/`" aria-label="Go to Event Schedule" active-class="btn-danger" class="rounded-0" style="width: 100%; padding-top: 16px;" >
                <i-bi-calendar-event aria-hidden="true" tabindex="-1" style="height: 35px; width:35px;"/>
            </b-button>

            <b-button :to="`/local-tips`" aria-label="Go to Local Tips" active-class="btn-danger" class="rounded-0" style="width: 100%; padding-top: 16px;" >
                <i-bi-pin-map aria-hidden="true" tabindex="-1" style="height: 35px; width:35px;" />
            </b-button>

            <b-button :to="`/directory`" aria-label="Go to Directory" active-class="btn-danger" class="rounded-0" style="width: 100%; padding-top: 16px;">
                <i-bi-journal-bookmark aria-hidden="true" tabindex="-1" style="height: 35px; width:35px;" />
            </b-button>

            <b-button :to="`/people/jack-dorsey`" aria-label="Go to my profile" active-class="btn-danger" class="rounded-0" style="width: 100%; padding-top: 16px;">
                <i-bi-person-circle aria-hidden="true" tabindex="-1" style="height: 35px; width:35px;" />
            </b-button>
        </b-button-group>
    </div>
</template>

<style>
.menu {
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    z-index: 100;
}

b-btn-group {
    background-color: black;
}
</style>
