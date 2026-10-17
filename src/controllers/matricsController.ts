import { Request, Response } from "express";

export class MatricsController {
  private pendingJobs = 0;

  public getMetrics = (req: Request, res: Response) => {
    return res.status(200).json({ pendingJobs: this.pendingJobs });
  }

  public updateMetrics = (req: Request, res: Response) => {
    const pendingJobs = req.body && req.body.pendingJobs;
    if (!Number.isSafeInteger(pendingJobs) || pendingJobs < 0) {
      return res.status(400).json({
        error: "pendingJobs must be a non-negative safe integer"
      });
    }

    this.pendingJobs = pendingJobs;
    return res.status(200).json({ pendingJobs: this.pendingJobs });
  }
}
