import momentTimeZonePlugin from '@fullcalendar/moment-timezone'
import { testTimeZoneImpl } from '../lib/timeZoneImpl'

describe('moment-timezone', function() {
  testTimeZoneImpl(momentTimeZonePlugin)
})
