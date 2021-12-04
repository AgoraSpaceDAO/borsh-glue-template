import { TransactionInstruction } from "@solana/web3.js";

export function parseInstruction(jsonString) {
    let parsed = JSON.parse(jsonString, function(key, value) {
        if (key === "accounts") {
            this.keys = value;
            return; // return undefined removes "accounts" from the keys
        } else if (key === "program_id") {
            this.programId = value;
            return;
        } else if (key === "is_signer") {
            this.isSigner = value;
            return;
        } else if (key === "is_writable") {
            this.isWritable = value;
            return;
        }
        return value;
    });
    return new TransactionInstruction(parsed);
}
