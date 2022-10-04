interface ExplanationConclusionProps {
  totalIsMoreThanSix: boolean
}

export function ExplanationConclusion({totalIsMoreThanSix}: ExplanationConclusionProps) {
  return (
    <div>
      {
        totalIsMoreThanSix ?
        <div>
          <p>
            After adding all of those numbers we are left with 12,
            and since 12 is more than six we divide it by seven until we get a remainder that is between 0 and 6.
          </p>
          <p>
            This gives us a result of 5, so we can conclude that august 14, 1970 was a friday.
          </p>
        </div>
        :
        <div>
          <p>
            After adding all of those numbers we are left with 5,
            and since 5 is less than seven we can conclude that august 14, 1970 was a friday.
          </p>
        </div>
      }
    </div>
  )
}