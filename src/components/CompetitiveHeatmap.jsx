/*
import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./style/heatmap.css";
import { subDays, format, eachDayOfInterval } from "date-fns";
import { Tooltip } from "react-tooltip";
const CompetitiveHeatmap = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const leetcodeUsername = "iJCTwS5SOZ";
      const codeforcesHandle = "shreyagoyal276";

      const today = new Date();
      const yearAgo = subDays(today, 364);
      const allDates = eachDayOfInterval({ start: yearAgo, end: today });

      const dateCountMap = {};

      // LeetCode Fetch
      try {
        const lcRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
        const lcData = await lcRes.json();
        if (lcData && lcData.submissionCalendar) {
          for (let ts in lcData.submissionCalendar) {
            const date = format(new Date(parseInt(ts) * 1000), "yyyy-MM-dd");
            dateCountMap[date] = (dateCountMap[date] || 0) + lcData.submissionCalendar[ts];
          }
        }
      } catch (e) {
        console.warn("LeetCode fetch failed");
      }

      // Codeforces Fetch
      try {
        const cfRes = await fetch(`https://codeforces.com/api/user.status?handle=${codeforcesHandle}`);
        const cfData = await cfRes.json();
        if (cfData.status === "OK") {
          cfData.result.forEach((submission) => {
            const date = format(new Date(submission.creationTimeSeconds * 1000), "yyyy-MM-dd");
            dateCountMap[date] = (dateCountMap[date] || 0) + 1;
          });
        }
      } catch (e) {
        console.warn("Codeforces fetch failed");
      }

      // // Geeks for geeks Fetch
      // try {
      //   const gfgRes = await fetch('https://mygfg-api.vercel.app/shreyago82f0/calendar?year=2024');
      //   const gfgData = await gfgRes.json();
      //   if (gfgData && gfgData["Submission Dates"]) {
      //     for (let ts in gfgData["Submission Dates"]) {
      //       const date = format(new Date(parseInt(ts) * 1000), "yyyy-MM-dd");
      //       dateCountMap[date] = (dateCountMap[date] || 0) + gfgData.submissionCalendar[ts];
      //     }
      //   }
      // } catch (e) {
      //   console.warn("gfg fetch failed");
      // }

      // Final Map
      const finalData = allDates.map((day) => {
        const dateStr = format(day, "yyyy-MM-dd");
        return {
          date: dateStr,
          count: dateCountMap[dateStr] || 0,
        };
      });

      setHeatmapData(finalData);
    };

    fetchData();
  }, []);

  return (
    <div className="heatmap-container">
      <h3>Competitive Coding Activity (LeetCode + Codeforces)</h3>
      <div className="heatmap-scroll">
      <div className="heatmap-wrapper">
      <CalendarHeatmap
        startDate={subDays(new Date(), 364)}
        endDate={new Date()}
        values={heatmapData}
        classForValue={(value) => {
          if (!value) return "color-scale-0";
          if (value.count >= 40) return "color-scale-7";
          if (value.count >= 30) return "color-scale-6";
          if (value.count >= 20) return "color-scale-5";
          if (value.count >= 15) return "color-scale-4";
          if (value.count >= 10) return "color-scale-3";
          if (value.count >= 5) return "color-scale-2";
          if (value.count >= 1) return "color-scale-1";
          return "color-scale-0";
        }}
        tooltipDataAttrs={(value) =>
          value?.date
            ? {
                "data-tooltip-id": "heatmap-tooltip",
                "data-tooltip-content": `${value.count > 0 ? `${value.count} submission${value.count > 1 ? "s" : ""}` : "No submission"}`,
              }
            : {
                "data-tooltip-id": "heatmap-tooltip",
                "data-tooltip-content": "No data",
              }
        }
        showWeekdayLabels={true}
      />
      <Tooltip id="heatmap-tooltip" />
      </div>
      </div>
    </div>
  );
};

export default CompetitiveHeatmap;
*/
