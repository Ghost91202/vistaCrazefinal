"use client";

  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
  export default function Meeting() {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
	return <button data-cal-namespace=""
	  data-cal-link="vista-craze-jht82p/15min"

	  data-cal-config='{"layout":"month_view"}'
	  >Schedule a call</button>;
  };