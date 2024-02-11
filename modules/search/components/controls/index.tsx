"use client";

import IncludeGenres from "../genre";
import SelectMediaType from "../media-type";
import SubmitButton from "../submit";
import QueryInput from "../query";

export default function SearchControls() {
  return (
    <section className="mx-auto max-w-7xl border-b p-5">
      <div className="grid grid-flow-dense grid-cols-1 items-end gap-2 lg:grid-cols-2">
        <QueryInput className="w-full max-w-none" />
        <div className="flex flex-row items-end gap-2">
          <SelectMediaType />
          <IncludeGenres />
          <SubmitButton className="w-fit" />
        </div>
      </div>
    </section>
  );
}
