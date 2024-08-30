// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CallExecuted extends ethereum.Event {
  get params(): CallExecuted__Params {
    return new CallExecuted__Params(this);
  }
}

export class CallExecuted__Params {
  _event: CallExecuted;

  constructor(event: CallExecuted) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get target(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class CallSalt extends ethereum.Event {
  get params(): CallSalt__Params {
    return new CallSalt__Params(this);
  }
}

export class CallSalt__Params {
  _event: CallSalt;

  constructor(event: CallSalt) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get salt(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class CallScheduled extends ethereum.Event {
  get params(): CallScheduled__Params {
    return new CallScheduled__Params(this);
  }
}

export class CallScheduled__Params {
  _event: CallScheduled;

  constructor(event: CallScheduled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get target(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get predecessor(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get delay(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class Cancelled extends ethereum.Event {
  get params(): Cancelled__Params {
    return new Cancelled__Params(this);
  }
}

export class Cancelled__Params {
  _event: Cancelled;

  constructor(event: Cancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class MinDelayChange extends ethereum.Event {
  get params(): MinDelayChange__Params {
    return new MinDelayChange__Params(this);
  }
}

export class MinDelayChange__Params {
  _event: MinDelayChange;

  constructor(event: MinDelayChange) {
    this._event = event;
  }

  get oldDuration(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newDuration(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class GovernorTimelock extends ethereum.SmartContract {
  static bind(address: Address): GovernorTimelock {
    return new GovernorTimelock("GovernorTimelock", address);
  }

  CANCELLER_ROLE(): Bytes {
    let result = super.call("CANCELLER_ROLE", "CANCELLER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CANCELLER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CANCELLER_ROLE",
      "CANCELLER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  EXECUTOR_ROLE(): Bytes {
    let result = super.call("EXECUTOR_ROLE", "EXECUTOR_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_EXECUTOR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EXECUTOR_ROLE",
      "EXECUTOR_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PROPOSER_ROLE(): Bytes {
    let result = super.call("PROPOSER_ROLE", "PROPOSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PROPOSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "PROPOSER_ROLE",
      "PROPOSER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TIMELOCK_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "TIMELOCK_ADMIN_ROLE",
      "TIMELOCK_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_TIMELOCK_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "TIMELOCK_ADMIN_ROLE",
      "TIMELOCK_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getMinDelay(): BigInt {
    let result = super.call("getMinDelay", "getMinDelay():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getMinDelay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getMinDelay", "getMinDelay():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getTimestamp(id: Bytes): BigInt {
    let result = super.call("getTimestamp", "getTimestamp(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(id)
    ]);

    return result[0].toBigInt();
  }

  try_getTimestamp(id: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimestamp",
      "getTimestamp(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hashOperation(
    target: Address,
    value: BigInt,
    data: Bytes,
    predecessor: Bytes,
    salt: Bytes
  ): Bytes {
    let result = super.call(
      "hashOperation",
      "hashOperation(address,uint256,bytes,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromFixedBytes(predecessor),
        ethereum.Value.fromFixedBytes(salt)
      ]
    );

    return result[0].toBytes();
  }

  try_hashOperation(
    target: Address,
    value: BigInt,
    data: Bytes,
    predecessor: Bytes,
    salt: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashOperation",
      "hashOperation(address,uint256,bytes,bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data),
        ethereum.Value.fromFixedBytes(predecessor),
        ethereum.Value.fromFixedBytes(salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hashOperationBatch(
    targets: Array<Address>,
    values: Array<BigInt>,
    payloads: Array<Bytes>,
    predecessor: Bytes,
    salt: Bytes
  ): Bytes {
    let result = super.call(
      "hashOperationBatch",
      "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(payloads),
        ethereum.Value.fromFixedBytes(predecessor),
        ethereum.Value.fromFixedBytes(salt)
      ]
    );

    return result[0].toBytes();
  }

  try_hashOperationBatch(
    targets: Array<Address>,
    values: Array<BigInt>,
    payloads: Array<Bytes>,
    predecessor: Bytes,
    salt: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "hashOperationBatch",
      "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32):(bytes32)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(payloads),
        ethereum.Value.fromFixedBytes(predecessor),
        ethereum.Value.fromFixedBytes(salt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isOperation(id: Bytes): boolean {
    let result = super.call("isOperation", "isOperation(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(id)
    ]);

    return result[0].toBoolean();
  }

  try_isOperation(id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOperation", "isOperation(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOperationDone(id: Bytes): boolean {
    let result = super.call(
      "isOperationDone",
      "isOperationDone(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );

    return result[0].toBoolean();
  }

  try_isOperationDone(id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOperationDone",
      "isOperationDone(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOperationPending(id: Bytes): boolean {
    let result = super.call(
      "isOperationPending",
      "isOperationPending(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );

    return result[0].toBoolean();
  }

  try_isOperationPending(id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOperationPending",
      "isOperationPending(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOperationReady(id: Bytes): boolean {
    let result = super.call(
      "isOperationReady",
      "isOperationReady(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );

    return result[0].toBoolean();
  }

  try_isOperationReady(id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOperationReady",
      "isOperationReady(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get minDelay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get proposers(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get executors(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get payload(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get predecessor(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get salt(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class ExecuteBatchCall extends ethereum.Call {
  get inputs(): ExecuteBatchCall__Inputs {
    return new ExecuteBatchCall__Inputs(this);
  }

  get outputs(): ExecuteBatchCall__Outputs {
    return new ExecuteBatchCall__Outputs(this);
  }
}

export class ExecuteBatchCall__Inputs {
  _call: ExecuteBatchCall;

  constructor(call: ExecuteBatchCall) {
    this._call = call;
  }

  get targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get payloads(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get predecessor(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get salt(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class ExecuteBatchCall__Outputs {
  _call: ExecuteBatchCall;

  constructor(call: ExecuteBatchCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class ScheduleCall extends ethereum.Call {
  get inputs(): ScheduleCall__Inputs {
    return new ScheduleCall__Inputs(this);
  }

  get outputs(): ScheduleCall__Outputs {
    return new ScheduleCall__Outputs(this);
  }
}

export class ScheduleCall__Inputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get predecessor(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get salt(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get delay(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ScheduleCall__Outputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }
}

export class ScheduleBatchCall extends ethereum.Call {
  get inputs(): ScheduleBatchCall__Inputs {
    return new ScheduleBatchCall__Inputs(this);
  }

  get outputs(): ScheduleBatchCall__Outputs {
    return new ScheduleBatchCall__Outputs(this);
  }
}

export class ScheduleBatchCall__Inputs {
  _call: ScheduleBatchCall;

  constructor(call: ScheduleBatchCall) {
    this._call = call;
  }

  get targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get payloads(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get predecessor(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get salt(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get delay(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ScheduleBatchCall__Outputs {
  _call: ScheduleBatchCall;

  constructor(call: ScheduleBatchCall) {
    this._call = call;
  }
}

export class UpdateDelayCall extends ethereum.Call {
  get inputs(): UpdateDelayCall__Inputs {
    return new UpdateDelayCall__Inputs(this);
  }

  get outputs(): UpdateDelayCall__Outputs {
    return new UpdateDelayCall__Outputs(this);
  }
}

export class UpdateDelayCall__Inputs {
  _call: UpdateDelayCall;

  constructor(call: UpdateDelayCall) {
    this._call = call;
  }

  get newDelay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateDelayCall__Outputs {
  _call: UpdateDelayCall;

  constructor(call: UpdateDelayCall) {
    this._call = call;
  }
}
