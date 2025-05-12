export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  status: string;
  orderType: string;
  total: number;
  preparationNotes: string;
  scheduledFor?: string;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    specialInstructions?: string;
  }[];
}
