#!/bin/sh
openapi-generator generate \
-i ../reference/customerfacing.yaml \
-g typescript-axios \
-o .
#--additional-properties=library=apollo
