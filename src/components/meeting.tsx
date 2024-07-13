"use client";

  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
interface MeetingProps {
  title: string;
}

export default function Meeting({ title }: MeetingProps) {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button data-cal-namespace=""
	  data-cal-link="vista-craze-jht82p/15min"

	  data-cal-config='{"layout":"month_view"}'
	  >{title}</button>;
  };
