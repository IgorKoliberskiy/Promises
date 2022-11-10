import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then((saving) => {
  GameSaving(saving.id, saving.created, saving.userInfo);
}, (error) => {
  throw new Error(error);
});