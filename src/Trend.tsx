import React from "react";
import "./Trend.css";

// -------------------------------
// TYPES
// -------------------------------
export interface TrendItem {
  name: string;
  category: string;
  growth: string;
  revenue: string;
  units: string;
  insight: string;
}

// -------------------------------
// DATA
// -------------------------------
const popularItems: TrendItem[] = [
  {
    name: "Classic White T-Shirt",
    category: "Tops",
    growth: "+45%",
    revenue: "$10,260",
    units: "342 units",
    insight: "High demand, consistent sales",
  },
  {
    name: "Denim Jacket",
    category: "Outerwear",
    growth: "+38%",
    revenue: "$19,620",
    units: "218 units",
    insight: "Seasonal trend, premium pricing",
  },
  {
    name: "Running Sneakers",
    category: "Footwear",
    growth: "+32%",
    revenue: "$18,900",
    units: "189 units",
    insight: "New release, strong reviews",
  },
  {
    name: "Leather Belt",
    category: "Accessories",
    growth: "+28%",
    revenue: "$4,680",
    units: "156 units",
    insight: "Essential accessory, steady demand",
  },
];

const underperformingItems: TrendItem[] = [
  {
    name: "Cargo Shorts",
    category: "Bottoms",
    growth: "-42%",
    revenue: "$690",
    units: "23 units",
    insight: "End of season, style change",
  },
  {
    name: "Neon Tank Top",
    category: "Tops",
    growth: "-38%",
    revenue: "$360",
    units: "18 units",
    insight: "Trend fading, limited appeal",
  },
  {
    name: "Pleated Skirt",
    category: "Bottoms",
    growth: "-35%",
    revenue: "$750",
    units: "15 units",
    insight: "Low demand, sizing issues",
  },
  {
    name: "Velvet Blazer",
    category: "Outerwear",
    growth: "-31%",
    revenue: "$1,440",
    units: "12 units",
    insight: "Seasonal item, high price point",
  },
];

// -------------------------------
// COMPONENTS
// -------------------------------
interface TrendCardProps {
  item: TrendItem;
  positive: boolean;
}

const TrendCard: React.FC<TrendCardProps> = ({ item, positive }) => {
  const handleClick = () => {
    console.log("Clicked:", item.name);
  };

  return (
    <div
      className={
        "trend-card " +
        (positive ? "trend-card-positive" : "trend-card-negative")
      }
      onClick={handleClick}
    >
      <div className="trend-card-header">
        <h4 className="trend-card-name">{item.name}</h4>
        <div className="trend-card-numbers">
          <div className="trend-card-revenue">{item.revenue}</div>
          <div className="trend-card-units">{item.units}</div>
        </div>
      </div>

      <div className="trend-card-meta">
        <span className="trend-chip">{item.category}</span>
        <span
          className={
            "trend-growth " +
            (positive ? "trend-growth-positive" : "trend-growth-negative")
          }
        >
          {item.growth}
        </span>
      </div>

      <div className="trend-card-insight">
        <span className="trend-insight-label">Insight:</span>{" "}
        <span className="trend-insight-text">{item.insight}</span>
      </div>
    </div>
  );
};

// -------------------------------
// MAIN EXPORT COMPONENT
// -------------------------------
const Trend: React.FC = () => {
  return (
    <div className="trend-section">
      <h2 className="trend-title">Product Performance Trends</h2>
      <p className="trend-subtitle">
        Compare your best and worst performing items
      </p>

      <div className="trend-layout">
        {/* LEFT COLUMN */}
        <div className="trend-column">
          <div className="trend-group-header">
            <div className="trend-group-header-left">
              <span className="trend-icon trend-icon-up">↗</span>
              <span className="trend-group-title">Most Popular Items</span>
            </div>
          </div>

          <div className="trend-card-list">
            {popularItems.map((item) => (
              <TrendCard key={item.name} item={item} positive={true} />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="trend-column">
          <div className="trend-group-header">
            <div className="trend-group-header-left">
              <span className="trend-icon trend-icon-down">↘</span>
              <span className="trend-group-title">Underperforming Items</span>
            </div>
          </div>

          <div className="trend-card-list">
            {underperformingItems.map((item) => (
              <TrendCard key={item.name} item={item} positive={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;

