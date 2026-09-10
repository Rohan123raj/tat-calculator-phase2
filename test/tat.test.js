const request = require("supertest");
const app = require("../server");


describe("Phase 2 Bug Tests", () => {

  test("BUG 1: start date should not be counted as business day", async () => {
    const res = await request(app)
      .post("/api/tat")
      .send({
        startDate: "2026-09-11",
        tatDays: 1
      });

    expect(res.body.dueDate).not.toBe("9/11/2026");
  });

  test("BUG 2: tatDays=0 should be rejected", async () => {
    const res = await request(app)
      .post("/api/tat")
      .send({
        startDate: "2026-09-11",
        tatDays: 0
      });

    expect(res.status).toBe(400);
  });

  test("BUG 3: businessDaysUsed should be numeric", async () => {
    const res = await request(app)
      .post("/api/tat")
      .send({
        startDate: "2026-09-11",
        tatDays: 5
      });

    expect(typeof res.body.businessDaysUsed).toBe("number");
  });

  test("BUG 4: API should expose overdue field", async () => {
    const res = await request(app)
      .post("/api/tat")
      .send({
        startDate: "2026-09-11",
        tatDays: 1
      });

    expect(res.body).toHaveProperty("overdue");
  });

  test("BUG 5: dueDate should follow YYYY-MM-DD format", async () => {
    const res = await request(app)
      .post("/api/tat")
      .send({
        startDate: "2026-09-11",
        tatDays: 1
      });

    expect(res.body.dueDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

});