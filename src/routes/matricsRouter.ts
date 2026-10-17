import { Router } from "express";
import { MatricsController } from "../controllers/matricsController";

export class MatricsRouter {
  public matricsRoute: Router;
  private matricsController = new MatricsController();

  constructor() {
    this.matricsRoute = Router();
    /**
     * @swagger
     * components:
     *   schemas:
     *     Metrics:
     *       type: object
     *       required:
     *         - pendingJobs
     *       properties:
     *         pendingJobs:
     *           type: integer
     *           minimum: 0
     *           maximum: 9007199254740991
     *           default: 0
     *           example: 50
     *           description: Number of pending jobs. Resets to zero when the service restarts.
     * /api/metrics:
     *   get:
     *     summary: Get the current metric value
     *     description: Returns the pending job count monitored by KEDA.
     *     tags: [Metrics]
     *     security: []
     *     responses:
     *       '200':
     *         description: Current metric value
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Metrics'
     *   post:
     *     summary: Update the metric value
     *     description: Replaces the in-memory pending job count with a non-negative safe integer.
     *     tags: [Metrics]
     *     security: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Metrics'
     *     responses:
     *       '200':
     *         description: Updated metric value
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Metrics'
     *       '400':
     *         description: Missing or invalid pendingJobs value
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   example: pendingJobs must be a non-negative safe integer
     */
    this.matricsRoute.route("/")
      .get(this.matricsController.getMetrics)
      .post(this.matricsController.updateMetrics);
  }
}
