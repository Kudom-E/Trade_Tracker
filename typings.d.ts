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
