import { create } from "zustand";

export interface Connector {
  id: string;
  name: string;
  url: string;
  authHeader?: string;
}

interface ConnectorsState {
  connectors: Connector[];
  maxConnectors: number; // free-tier cap — swap for real plan state once there's a backend
  addConnector: (input: Omit<Connector, "id">) => void;
  removeConnector: (id: string) => void;
}

export const useConnectorsStore = create<ConnectorsState>((set) => ({
  connectors: [],
  maxConnectors: 1,
  addConnector: (input) =>
    set((state) => ({
      connectors: [...state.connectors, { id: crypto.randomUUID(), ...input }],
    })),
  removeConnector: (id) =>
    set((state) => ({
      connectors: state.connectors.filter((c) => c.id !== id),
    })),
}));
