import AppDispatcher from '../dispatcher/AppDispatcher';
import GameConstants from '../constants/GameConstants';
import { EventEmitter } from 'events';

const CHANGE_GAME_EVENT = "changeGame";
const CHANGE_SPACE_EVENT = "changeSpace";

let _game = {};
let _space = {};

function setGame(game) {
  _game = game;
}

function setSpace(space) {
  _space = space;
}

class GameStoreClass extends EventEmitter {

  emitGameChange() {
    this.emit(CHANGE_GAME_EVENT);
  }

  addGameChangeListener(callback) {
    this.on(CHANGE_GAME_EVENT, callback)
  }

  removeGameChangeListener(callback) {
    this.removeListener(CHANGE_GAME_EVENT, callback)
  }

  emitSpaceChange() {
    this.emit(CHANGE_SPACE_EVENT);
  }

  addSpaceChangeListener(callback) {
    this.on(CHANGE_SPACE_EVENT, callback)
  }

  removeSpaceChangeListener(callback) {
    this.removeListener(CHANGE_SPACE_EVENT, callback)
  }

  getGame() {
    return _game;
  }

  getSpace() {
    return _space;
  }

}

const GameStore = new GameStoreClass();

// Here we register a callback for the dispatcher
// and look for our various action types so we can
// respond appropriately
GameStore.dispatchToken = AppDispatcher.register(action => {

  switch(action.actionType) {
    case GameConstants.RECEIVE_GAME:
      setGame(action.game);
      // We need to call emitGameChange so the event listener knows that a change has been made
      GameStore.emitGameChange();
      break;

    case GameConstants.RECEIVE_GAME_ERROR:
      alert(action.message);
      GameStore.emitGameChange();
      break;

    case GameConstants.CHANGE_SPACE:
      setSpace(action.space);
      GameStore.emitSpaceChange();
      break;

    default:
  }

});

export default GameStore;