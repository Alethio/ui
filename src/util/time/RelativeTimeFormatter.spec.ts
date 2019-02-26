import * as assert from "assert";
import { RelativeTimeFormatter } from "./RelativeTimeFormatter";

describe("util/time/RelativeTimeFormatter", () => {
    let now = Date.now();
    let SECONDS = 1000; // in milliseconds
    let MINUTES = 60 * SECONDS;
    let HOURS = 60 * MINUTES;
    let DAYS = 24 * HOURS;
    let f = new RelativeTimeFormatter();

    describe("should format past time", () => {

        it("with two significant time units", () => {
            assert.equal("5 days 4 hours ago",
                f.formatDiff(now, now - (5 * DAYS + 4 * HOURS + 3 * MINUTES + 2 * SECONDS)));
        });

        it("with one significant time unit", () => {
            assert.equal("5 days ago",
                f.formatDiff(now, now - (5 * DAYS + 0 * HOURS + 2 * MINUTES)));
        });

        it("with minutes", () => {
            assert.equal("3 minutes ago",
                f.formatDiff(now, now - (3 * MINUTES + 1 * SECONDS)));
        });

        it("with seconds", () => {
            assert.equal("6 seconds ago", f.formatDiff(now, now - 6 * SECONDS));
        });

        it("with 1 second vs x seconds", () => {
            assert.equal("0 seconds ago", f.formatDiff(now, now));
            assert.equal("1 second ago", f.formatDiff(now, now - 1 * SECONDS));
            assert.equal("2 seconds ago", f.formatDiff(now, now - 2 * SECONDS));
        });
    });

    describe("should format future time", () => {
        it("with two significant time units", () => {
            assert.equal("in 5 days 4 hours",
                f.formatDiff(now - 1000 * (2 + 60 * (3 + (60 * (4 + (24 * 5))))), now));
        });

        it("with one significant time unit", () => {
            assert.equal("in 5 days",
                f.formatDiff(now - 1000 * (2 + 60 * (3 + (60 * (0 + (24 * 5))))), now));
        });

        it("with minutes", () => {
            assert.equal("in 3 minutes",
                f.formatDiff(now - (3 * MINUTES + 1 * SECONDS), now));
        });

        it("with 1 second vs x seconds", () => {
            assert.equal("in 1 second", f.formatDiff(now - 1 * SECONDS, now));
            assert.equal("in 2 seconds", f.formatDiff(now - 2 * SECONDS, now));
        });
    });
});
