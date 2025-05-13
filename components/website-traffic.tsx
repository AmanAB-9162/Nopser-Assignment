"use client"

export function WebsiteTraffic() {
  const websites = [
    { name: "Google", value: 60 },
    { name: "YouTube", value: 45 },
    { name: "Instagram", value: 80 },
    { name: "Pinterest", value: 30 },
    { name: "Facebook", value: 50 },
    { name: "Twitter", value: 35 },
    { name: "Tumblr", value: 25 },
  ]

  return (
    <div className="space-y-4">
      {websites.map((site) => (
        <div key={site.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{site.name}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-800">
            <div
              className={`h-2 rounded-full ${site.name === "Instagram" ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"}`}
              style={{ width: `${site.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
