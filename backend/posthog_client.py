import os
from posthog import Posthog

posthog = Posthog(
    project_api_key=os.getenv('POSTHOG_API_KEY'),
    host='https://eu.i.posthog.com'
)

def capture_event(event_name, properties={}):
    posthog.capture(event_name, properties=properties)
