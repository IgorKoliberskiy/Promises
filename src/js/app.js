import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

GameSavingLoader.load().then((saving) => {
  GameSaving(saving.id, saving.created, saving.userInfo);
}, (error) => {
  throw new Error(error);
});