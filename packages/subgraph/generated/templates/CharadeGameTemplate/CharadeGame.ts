// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class CardAdded extends ethereum.Event {
  get params(): CardAdded__Params {
    return new CardAdded__Params(this);
  }
}

export class CardAdded__Params {
  _event: CardAdded;

  constructor(event: CardAdded) {
    this._event = event;
  }
}

export class GameStarted extends ethereum.Event {
  get params(): GameStarted__Params {
    return new GameStarted__Params(this);
  }
}

export class GameStarted__Params {
  _event: GameStarted;

  constructor(event: GameStarted) {
    this._event = event;
  }
}

export class PlayerJoinedTeam extends ethereum.Event {
  get params(): PlayerJoinedTeam__Params {
    return new PlayerJoinedTeam__Params(this);
  }
}

export class PlayerJoinedTeam__Params {
  _event: PlayerJoinedTeam;

  constructor(event: PlayerJoinedTeam) {
    this._event = event;
  }

  get team(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoundStarted extends ethereum.Event {
  get params(): RoundStarted__Params {
    return new RoundStarted__Params(this);
  }
}

export class RoundStarted__Params {
  _event: RoundStarted;

  constructor(event: RoundStarted) {
    this._event = event;
  }

  get round(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get team(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ScoreUpdated extends ethereum.Event {
  get params(): ScoreUpdated__Params {
    return new ScoreUpdated__Params(this);
  }
}

export class ScoreUpdated__Params {
  _event: ScoreUpdated;

  constructor(event: ScoreUpdated) {
    this._event = event;
  }

  get team(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get score(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get word(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class TeamCreated extends ethereum.Event {
  get params(): TeamCreated__Params {
    return new TeamCreated__Params(this);
  }
}

export class TeamCreated__Params {
  _event: TeamCreated;

  constructor(event: TeamCreated) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get members(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class WordChecked extends ethereum.Event {
  get params(): WordChecked__Params {
    return new WordChecked__Params(this);
  }
}

export class WordChecked__Params {
  _event: WordChecked;

  constructor(event: WordChecked) {
    this._event = event;
  }

  get team(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get encryptedWord(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class CharadeGame__cardsResult {
  value0: string;
  value1: string;
  value2: boolean;
  value3: BigInt;
  value4: Address;

  constructor(
    value0: string,
    value1: string,
    value2: boolean,
    value3: BigInt,
    value4: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }

  getEncryptedWord(): string {
    return this.value0;
  }

  getWord(): string {
    return this.value1;
  }

  getIsUsed(): boolean {
    return this.value2;
  }

  getTeamId(): BigInt {
    return this.value3;
  }

  getPlayer(): Address {
    return this.value4;
  }
}

export class CharadeGame__getAllCardsResultValue0Struct extends ethereum.Tuple {
  get encryptedWord(): string {
    return this[0].toString();
  }

  get word(): string {
    return this[1].toString();
  }

  get isUsed(): boolean {
    return this[2].toBoolean();
  }

  get teamId(): BigInt {
    return this[3].toBigInt();
  }

  get player(): Address {
    return this[4].toAddress();
  }
}

export class CharadeGame__getAllTeamsResultValue0Struct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get members(): Array<Address> {
    return this[1].toAddressArray();
  }

  get score(): BigInt {
    return this[2].toBigInt();
  }
}

export class CharadeGame__teamsResult {
  value0: string;
  value1: BigInt;

  constructor(value0: string, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getName(): string {
    return this.value0;
  }

  getScore(): BigInt {
    return this.value1;
  }
}

export class CharadeGame extends ethereum.SmartContract {
  static bind(address: Address): CharadeGame {
    return new CharadeGame("CharadeGame", address);
  }

  SCORE_POINT(): BigInt {
    let result = super.call("SCORE_POINT", "SCORE_POINT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_SCORE_POINT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("SCORE_POINT", "SCORE_POINT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TIME_LIMIT(): BigInt {
    let result = super.call("TIME_LIMIT", "TIME_LIMIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TIME_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("TIME_LIMIT", "TIME_LIMIT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  activeTeamPlayer(param0: BigInt, param1: Address): boolean {
    let result = super.call(
      "activeTeamPlayer",
      "activeTeamPlayer(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );

    return result[0].toBoolean();
  }

  try_activeTeamPlayer(
    param0: BigInt,
    param1: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "activeTeamPlayer",
      "activeTeamPlayer(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  cards(param0: BigInt): CharadeGame__cardsResult {
    let result = super.call(
      "cards",
      "cards(uint256):(string,string,bool,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new CharadeGame__cardsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBoolean(),
      result[3].toBigInt(),
      result[4].toAddress(),
    );
  }

  try_cards(param0: BigInt): ethereum.CallResult<CharadeGame__cardsResult> {
    let result = super.tryCall(
      "cards",
      "cards(uint256):(string,string,bool,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CharadeGame__cardsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBoolean(),
        value[3].toBigInt(),
        value[4].toAddress(),
      ),
    );
  }

  checkWord(cardId: BigInt): string {
    let result = super.call("checkWord", "checkWord(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(cardId),
    ]);

    return result[0].toString();
  }

  try_checkWord(cardId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("checkWord", "checkWord(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(cardId),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  currentRound(): BigInt {
    let result = super.call("currentRound", "currentRound():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentRound(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("currentRound", "currentRound():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentTeam(): BigInt {
    let result = super.call("currentTeam", "currentTeam():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentTeam(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("currentTeam", "currentTeam():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAllCards(): Array<CharadeGame__getAllCardsResultValue0Struct> {
    let result = super.call(
      "getAllCards",
      "getAllCards():((string,string,bool,uint256,address)[])",
      [],
    );

    return result[0].toTupleArray<CharadeGame__getAllCardsResultValue0Struct>();
  }

  try_getAllCards(): ethereum.CallResult<
    Array<CharadeGame__getAllCardsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllCards",
      "getAllCards():((string,string,bool,uint256,address)[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CharadeGame__getAllCardsResultValue0Struct>(),
    );
  }

  getAllTeams(): Array<CharadeGame__getAllTeamsResultValue0Struct> {
    let result = super.call(
      "getAllTeams",
      "getAllTeams():((string,address[],uint256)[])",
      [],
    );

    return result[0].toTupleArray<CharadeGame__getAllTeamsResultValue0Struct>();
  }

  try_getAllTeams(): ethereum.CallResult<
    Array<CharadeGame__getAllTeamsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllTeams",
      "getAllTeams():((string,address[],uint256)[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<CharadeGame__getAllTeamsResultValue0Struct>(),
    );
  }

  hasCheckedWord(param0: Address): boolean {
    let result = super.call(
      "hasCheckedWord",
      "hasCheckedWord(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_hasCheckedWord(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasCheckedWord",
      "hasCheckedWord(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isGameStarted(): boolean {
    let result = super.call("isGameStarted", "isGameStarted():(bool)", []);

    return result[0].toBoolean();
  }

  try_isGameStarted(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isGameStarted", "isGameStarted():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  teams(param0: BigInt): CharadeGame__teamsResult {
    let result = super.call("teams", "teams(uint256):(string,uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);

    return new CharadeGame__teamsResult(
      result[0].toString(),
      result[1].toBigInt(),
    );
  }

  try_teams(param0: BigInt): ethereum.CallResult<CharadeGame__teamsResult> {
    let result = super.tryCall("teams", "teams(uint256):(string,uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CharadeGame__teamsResult(value[0].toString(), value[1].toBigInt()),
    );
  }

  totalTeams(): BigInt {
    let result = super.call("totalTeams", "totalTeams():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalTeams(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalTeams", "totalTeams():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wordCheckTime(param0: BigInt): BigInt {
    let result = super.call(
      "wordCheckTime",
      "wordCheckTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toBigInt();
  }

  try_wordCheckTime(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "wordCheckTime",
      "wordCheckTime(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _timeLimit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _scorePoint(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCardCall extends ethereum.Call {
  get inputs(): AddCardCall__Inputs {
    return new AddCardCall__Inputs(this);
  }

  get outputs(): AddCardCall__Outputs {
    return new AddCardCall__Outputs(this);
  }
}

export class AddCardCall__Inputs {
  _call: AddCardCall;

  constructor(call: AddCardCall) {
    this._call = call;
  }

  get encryptedCardWords(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }
}

export class AddCardCall__Outputs {
  _call: AddCardCall;

  constructor(call: AddCardCall) {
    this._call = call;
  }
}

export class AddTeamCall extends ethereum.Call {
  get inputs(): AddTeamCall__Inputs {
    return new AddTeamCall__Inputs(this);
  }

  get outputs(): AddTeamCall__Outputs {
    return new AddTeamCall__Outputs(this);
  }
}

export class AddTeamCall__Inputs {
  _call: AddTeamCall;

  constructor(call: AddTeamCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get members(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class AddTeamCall__Outputs {
  _call: AddTeamCall;

  constructor(call: AddTeamCall) {
    this._call = call;
  }
}

export class CheckWordCall extends ethereum.Call {
  get inputs(): CheckWordCall__Inputs {
    return new CheckWordCall__Inputs(this);
  }

  get outputs(): CheckWordCall__Outputs {
    return new CheckWordCall__Outputs(this);
  }
}

export class CheckWordCall__Inputs {
  _call: CheckWordCall;

  constructor(call: CheckWordCall) {
    this._call = call;
  }

  get cardId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CheckWordCall__Outputs {
  _call: CheckWordCall;

  constructor(call: CheckWordCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}

export class JoinTeamCall extends ethereum.Call {
  get inputs(): JoinTeamCall__Inputs {
    return new JoinTeamCall__Inputs(this);
  }

  get outputs(): JoinTeamCall__Outputs {
    return new JoinTeamCall__Outputs(this);
  }
}

export class JoinTeamCall__Inputs {
  _call: JoinTeamCall;

  constructor(call: JoinTeamCall) {
    this._call = call;
  }

  get teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class JoinTeamCall__Outputs {
  _call: JoinTeamCall;

  constructor(call: JoinTeamCall) {
    this._call = call;
  }
}

export class NextTeamTurnCall extends ethereum.Call {
  get inputs(): NextTeamTurnCall__Inputs {
    return new NextTeamTurnCall__Inputs(this);
  }

  get outputs(): NextTeamTurnCall__Outputs {
    return new NextTeamTurnCall__Outputs(this);
  }
}

export class NextTeamTurnCall__Inputs {
  _call: NextTeamTurnCall;

  constructor(call: NextTeamTurnCall) {
    this._call = call;
  }

  get teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class NextTeamTurnCall__Outputs {
  _call: NextTeamTurnCall;

  constructor(call: NextTeamTurnCall) {
    this._call = call;
  }
}

export class StateGameCall extends ethereum.Call {
  get inputs(): StateGameCall__Inputs {
    return new StateGameCall__Inputs(this);
  }

  get outputs(): StateGameCall__Outputs {
    return new StateGameCall__Outputs(this);
  }
}

export class StateGameCall__Inputs {
  _call: StateGameCall;

  constructor(call: StateGameCall) {
    this._call = call;
  }
}

export class StateGameCall__Outputs {
  _call: StateGameCall;

  constructor(call: StateGameCall) {
    this._call = call;
  }
}

export class UpdateScoreCall extends ethereum.Call {
  get inputs(): UpdateScoreCall__Inputs {
    return new UpdateScoreCall__Inputs(this);
  }

  get outputs(): UpdateScoreCall__Outputs {
    return new UpdateScoreCall__Outputs(this);
  }
}

export class UpdateScoreCall__Inputs {
  _call: UpdateScoreCall;

  constructor(call: UpdateScoreCall) {
    this._call = call;
  }

  get teamId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get cardId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get guessedWord(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class UpdateScoreCall__Outputs {
  _call: UpdateScoreCall;

  constructor(call: UpdateScoreCall) {
    this._call = call;
  }
}
