'use client'
import { subscribersAnalytics } from "@/actions/subcribers.analytics"
import { useEffect, useState } from "react"


const UseSubscribersAnalytics = () => {

      const [subscribersData, setSubscribersData] = useState<any>([])
      const [loading , setLoading] = useState(true)

      const fetchSubscribersAnalytics = async () => {
        await subscribersAnalytics().then((res: any) => {
          setSubscribersData(res);
          setLoading(false);
        });
      };

      useEffect(() => {
        fetchSubscribersAnalytics();
      }, []);
  return {subscribersData,loading}
}

export default UseSubscribersAnalytics