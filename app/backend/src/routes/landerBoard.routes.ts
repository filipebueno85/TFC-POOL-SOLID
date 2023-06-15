import { Request, Response, Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const landerboardController = new LeaderboardController();

const landerboardRouter = Router();

landerboardRouter.get(
  '/leaderboard/home',
  // Validate.validateToken,
  (req: Request, res: Response) => landerboardController.getLeaderBoardHome(req, res),
);

export default landerboardRouter;
