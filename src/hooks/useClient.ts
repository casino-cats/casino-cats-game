import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { createClient } from "../utils/client/client";
import { createProvider } from "../utils/client/common";
import { ClientType } from "../utils/client/types/clientType";

const useClient = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [client, setClient] = useState<ClientType>();

  useEffect(() => {
    if (
      wallet &&
      wallet.publicKey &&
      wallet.signAllTransactions &&
      wallet.signTransaction
    ) {
      const provider = createProvider(connection, {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      });
      setClient(createClient({ provider }));
    }
  }, [connection, wallet]);

  return client;
};

export default useClient;
