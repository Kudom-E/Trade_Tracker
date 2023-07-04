export interface Totals {
  time: string;
  total: string;
  percentage: string;
  icon: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string;
  }[];
  plugins: {
    legend: {
      display: boolean;
    };
  };
}

export interface TableData {
  headers: string[];
  data: {
    Name: string;
    Position: string;
    Office: string;
    Age?: string;
    Date?: string;
  }[];
}
